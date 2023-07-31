Navigate to the ZYFTAPI directory   
activate venv using : .\venv\Scripts\activate
upgrade pip using(optional run when the environment is not set) : python -m pip install --upgrade pip
if you dont find pip in venv use this command to get the pip(optional run when the environment is not set) :  python -m ensurepip --default-pip
run the command to install all the dependencies from requirements.txt(optional run when the environment is not set): pip install -r requirements.txt

once the setup is done run the command to get the app started:  python -m flask --app .\app.py run
after running the above command it will show Running on http://127.0.0.1:5000
open chrome browser and paste the link  http://127.0.0.1:5000 to get app running