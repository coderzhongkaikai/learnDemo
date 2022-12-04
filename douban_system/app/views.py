import copy
import json
import os

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, render_to_response

# Create your views here.

#
# def hello(request):
#     return  HttpResponse('hello')
from django.template import RequestContext
from django.views.decorators.csrf import csrf_exempt

from douban_system import settings

def home(request):
    get_data()
    return render(request, 'base.html', context={
        # 'article_list': {article_list:}, 'data': data
    })

def get_data():
    static_url = os.path.join(settings.BASE_DIR, 'static')
    # print(static_url)
    # # 数据路径
    path = f'{static_url}/data.json'
    # print(path)
    # row_data = []
    # # # 读取文件数据
    all_data=[]
    with open(path, "r") as f:
        data=json.load(f)
        for type in data:
            for item in data[type]:
                 item['hot']=0
        settings.global_all_data =data
        # add_hot()
        # print(all_data)
        # return row_data[type]

def data_filt(type):
   return  settings.global_all_data[type]

def add_pinglun(type,name,pinglun):
    add_hot(type, name)
    for item in settings.global_all_data[type]:
        if item['name'] == name:
            if 'pinglun' in item:
                item['pinglun'].append(pinglun)
            else:
                item['pinglun']=[pinglun]

# 热度规则：点击一次加一次，全名称一次加一次，评论一次加一次
def add_hot(type,name):
    # for type in settings.global_all_data:
        for item in settings.global_all_data[type]:
            if item['name']==name:
                if 'hot' in item:
                    item['hot']=item['hot']+1
                else:
                    item['hot']=1
                # print(item)

# 排序快速排序
def mysort(data,ziduan):
    # for item in data:
    data=copy.deepcopy(data)
    for i in range(len(data) - 1):
        min_index = i
        for j in range(i + 1, len(data)):
            if ziduan in data[j] :
                if data[j][ziduan] > data[min_index][ziduan]:
                    min_index = j
            else:
                data[j][ziduan]=0
        data[i], data[min_index] = data[min_index], data[i]
    return data
        # print(item)


def new(request,type):
   temp_data= data_filt(type)
   Context = {'list': mysort(temp_data,'date'), 'title': type}
   return render_to_response(type+'.html', Context)

def hot(request, type):
    temp_data = data_filt(type)
    Context = {'list': mysort(temp_data, 'hot'), 'title': type}
    return render_to_response(type + '.html', Context)


##
@csrf_exempt
def movie(request):
    if request.method == "POST":
        print('POST', request.POST.get('name'))
        return input_search(request, 'movie', request.POST.get('name'))
    if request.method == "GET":
        print('GET', request.GET.get('name'))
    Context = {'list':data_filt('movie'),'title':'movie'}
    return render_to_response('movie.html', Context)
    # return render(request, 'movie.html', context={
    #     # 'article_list': {article_list:}, 'data': data
    # })

@csrf_exempt
def series(request):
    if request.method == "POST":
        print('POST', request.POST.get('name'))
        return input_search(request, 'series', request.POST.get('name'))
    if request.method == "GET":
        print('GET', request.GET.get('name'))
    Context = {'list': data_filt('series'),'title':'series'}
    return render_to_response('series.html', Context)

@csrf_exempt
def book(request):
    if request.method == "POST":
        print('POST',request.POST.get('name'))
        return input_search(request,'book', request.POST.get('name'))
    if request.method == "GET":
        print('GET',request.GET.get('name'))
        # return search(request,'book', request.POST.get('search'))
    # if request.method == "GET":
    #     print('GET',request.GET.get('search'))
    #     return search(request, request.GET.get('search'))

    Context = {'list': data_filt('book'),'title':'book'}
    return render_to_response('book.html', Context)


#
def input_search(request,type,name):
    print(name,'input_search')
    temp_list = data_filt(type)
    # # print(temp_list)
    if name:
        add_hot(type,name)
        data_list = []
        for item in temp_list:
            # print(item['name'])
            # print(item['name'].find(name))
            if (item['name'].find(name) > -1):
                data_list.append(item)
        Context = {'list': data_list, 'title': type}
        return render(request, 'detail.html', Context)

    Context = {'list': temp_list, 'title': type}
    return render(request, type + '.html', Context)


#
@csrf_exempt
def search(request,type,name):
    print(type)
    print(name)
    # if request.method == "GET":
    #     print('search GET',request.GET.get('name'))
    # print(name)
    temp_list=data_filt(type)

    if request.method == "POST":
        print('POST', request.POST.get('pinglun'))
        add_pinglun(type,name,request.POST.get('pinglun'))
        if name:
            data_list = []
            for item in temp_list:
                # print(item['name'])
                # print(item['name'].find(name))
                if (item['name'].find(name) > -1):
                    data_list.append(item)
            Context = {'list': data_list, 'title': type}
            return render(request, 'detail.html', Context)
        # return input_search(request, 'book', request.POST.get('name'))

    add_hot(type, name)
    # # print(temp_list)
    if name:
        data_list=[]
        for item in temp_list:
            # print(item['name'])
            # print(item['name'].find(name))
            if(item['name'].find(name)>-1):
                data_list.append(item)
        Context = {'list': data_list, 'title': type}
        return render(request,'detail.html', Context)

    Context = {'list': temp_list,'title':type}
    return render(request, type+'.html', Context)
    #
    # return render(request, 'book.html', context={
    #     # 'article_list': {article_list:}, 'data': data
    # })




