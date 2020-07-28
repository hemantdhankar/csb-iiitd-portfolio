import pandas as pd
from projects.models import Project

path = "E:\Project\Portfolio\CSB Portfolio (Responses).csv"
Main_df = pd.read_csv(path)

for index in Main_df.index:
    category = Main_df.loc[index,"Type of project"].split(",")
    Project.objects.create(projectName=Main_df.loc[index,"Title"], projectDescription=Main_df.loc[index,"Description"], projectCategory=category, projectTeam=Main_df.loc[index,"Team Member (use comma ',' for separator, if individual project write only your name)"], projectLink=Main_df.loc[index,"Link(if hosted like website, play store link etc) "])