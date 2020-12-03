# react-tracks
pip install pipenv
pipenv install django graphene-django django-graphql-jwt django-cors-headers
pipenv install --dev autopep8
pipenv shell

django-admin startproject app
python manage.py migrate

python manage.py runserver
python manage.py startapp tracks
python manage.py makemigrations
python manage.py migrate
