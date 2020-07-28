import pandas as pd
from .models import Project

path = "E:\Project\Portfolio\CSB Portfolio (Responses).csv"
Main_df = pd.read_csv(path)

def print_df():
    for loop in Main_df.index:
        print(Main_df.iloc[loop,:])

    print()
    print(Main_df.columns)
