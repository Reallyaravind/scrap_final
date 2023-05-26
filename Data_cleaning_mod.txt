import pandas as pd

# Load the data into a Pandas DataFrame
df = pd.read_csv("student_data.csv")

# Remove unnecessary columns
df = df.drop(columns=["Timestamp", "Phone Number ", "Current school name", "Which class are you studying now?", "Fill in the state in which you are studying in now?", "Fill in Extra curricular activities you have participated in or you like to participate in? Or Fill in your achievements."])

# Replace missing values with NaN
df = df.replace(r'^\s*$', np.nan, regex=True)

# Drop rows with all NaN values
df = df.dropna(how='all')

# Fill remaining NaN values with mean of column
df = df.fillna(df.mean())

# Convert grades to numerical values
grade_columns = df.columns[7:]
df[grade_columns] = df[grade_columns].apply(pd.to_numeric)

# Normalize numerical columns
df[grade_columns] = (df[grade_columns] - df[grade_columns].mean()) / df[grade_columns].std()

# One-hot encode categorical columns
categorical_columns = df.columns[:5]
df = pd.get_dummies(df, columns=categorical_columns)

# Save the cleaned and preprocessed data to a new file
df.to_csv("cleaned_student_data.csv", index=False)
