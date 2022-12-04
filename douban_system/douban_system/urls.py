"""douban_system URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from app import views

urlpatterns = [
    path('', views.home),
    path('movie/', views.movie),
    path('book/', views.book),
    path('series/', views.series),
    # path('admin/', admin.site.urls),
    # path('<int:a>/<str:op>/<int:b>',views.cal_views),
    # path('list/<str:type>', views.type_list),
    path('<str:type>/search/<str:name>', views.search,name='search'),
    path('<str:type>/new', views.new, name='new'),
    path('<str:type>/hot', views.hot, name='hot')

    # path('<str:type>/search/<str:name>', views.search, name='search')
]
