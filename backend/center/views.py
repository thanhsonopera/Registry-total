from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.template import loader
from .models import center, owner, registration, inspection


def center1(request):
    template = loader.get_template('myfirst.html')
    return HttpResponse(template.render())


def center_list(request):
    centers = center.objects.all()
    # centers_dict = centers.values()
    # print(centers)
    # return render(request, 'centers.html', {'centers': centers})
    data = list(centers.values())
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})


def owner_list(request):
    owners = owner.objects.all()
    # centers_dict = centers.values()
    # print(centers)
    # return render(request, 'owners.html', {'owners': owners})
    data = list(owners.values())
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})


def registration_list(request):
    registrations = registration.objects.all()
    # Chuyển đổi QuerySet thành danh sách các đối tượng dict
    data = list(registrations.values())
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})


def inspection_list(request):
    inspections = inspection.objects.all()
    data = list(inspections.values())
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})
