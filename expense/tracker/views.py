from django.shortcuts import render, redirect
from .forms import ExpenseForm
from .models import Expense
from django.http import HttpResponseRedirect
# Create your views here.
def index(request):
    if request.method =='POST':
        expense = ExpenseForm(request.POST)
        if expense.is_valid():
            expense.save()
            return HttpResponseRedirect('/')
    
    expenses = Expense.objects.all()
    expense_form = ExpenseForm()
    return render(request,'tracker/index.html', {'expense_form':expense_form,'expenses':expenses})

def edit(request,id):
    expense = Expense.objects.get(id=id)
    expense_form = ExpenseForm(instance=expense)
    if request.method == 'POST':
        form = ExpenseForm(request.POST, instance=expense)
        if form.is_valid():
            form.save()
            return redirect('index')
        
    return render(request,'tracker/edit.html',{'expense_form':expense_form})