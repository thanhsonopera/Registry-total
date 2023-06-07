from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


def Center_feature(request):
    a = HttpResponse()
    a.write("hihi")
    return a
