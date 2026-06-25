from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import JsonResponse
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Posts
from .serializers import PostSerializer
from drf_spectacular.utils import extend_schema



# Create your views here.
def test_class(request):
    return render(request, 'core/test_class.html')


def test(request):

    return JsonResponse({

        "backend":"Django",

        "database":"Postgres",

        "status":"connected",

        "framework":"React"

    })

@csrf_exempt
def create_item(request):
    if request.method == "POST":
        data = json.loads(request.body)

        return JsonResponse({
            "message": "data received",
            "your_data": data
        })

    return JsonResponse({"error": "POST only"}, status=400)



@extend_schema(request=PostSerializer, responses=PostSerializer)
@api_view(["POST"])
def create_post(request):
    serializer = PostSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()   #  ذخیره در Postgres
        return Response({
            "message": "saved successfully",
            "data": serializer.data
        })

    return Response(serializer.errors, status=400)