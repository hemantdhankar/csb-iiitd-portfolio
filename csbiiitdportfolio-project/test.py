import pandas as pd
from projects.models import Project

path = "E:\Project\Portfolio\Updated_response.csv"
Main_df = pd.read_csv(path)

for index in Main_df.index:
    category = Main_df.loc[index,"Type of project"].split(",")
    Project.objects.create(projectName=Main_df.loc[index,"Project Title (max 50 character)"], projectDescription=Main_df.loc[index,"Description (max 30 words, 200 characters)"], projectCategory=category, projectTeam=Main_df.loc[index,"Team Member (use comma ',' for separator, if individual project write only your name)"], projectLink=Main_df.loc[index,"Web Link(if hosted like a website) The website can be your working project or a site having a description of your project."])