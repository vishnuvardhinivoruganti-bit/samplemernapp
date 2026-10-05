from fastapi import FastAPI
app=FastAPI()

@app.get("/getstudents")
def get_students():
    return "get students method called"
#localhost:8000/addstudents => post
@app.post("/addstudents")
def add_students():
    return "add students method called"
@app.put("/updateStudent")
def putStudent():
    return " update student method called "
@app.delete("/deleteStudent")
def deleteStudent():
    return " delete student method called "