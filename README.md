## Auto-Report Generation from HVAC Data: A README
***This ideas belongs to an internship opportunity at Piechowski's Energy, Melbourne, Australia.***

This repository contains the source code for an language model that automatically generates reports from HVAC data.

**Objective:**

The goal of this project is to develop a robust language model that can:

1. Analyze HVAC data (specifically, data related to temperature and fan operation).
2. Extract key information from the data (e.g., temperature fluctuations, time spent within/outside setpoint range, average temperature, fan operation hours, etc.).
3. Generate a structured report summarizing the extracted information in a clear and concise manner, following a defined template.

**Key Features:**

* **Data Processing:** The model will be trained to understand the format of HVAC data and extract relevant data points. 
* **Data Interpretation:** The model will be able to analyze the extracted data, identifying key trends, fluctuations, and patterns.
* **Report Generation:** The model will generate a human-readable report based on the interpreted data, following the provided template. This will involve natural language processing techniques to form grammatically correct and informative sentences.

**Code Structure:**

```
├── bart-t5     
│   └── ...
├── datasets   
│   ├── 10       
│   │   ├── data_2023-10-01.txt   
│   │   ├── data_2023-10-02.txt   
│   │   └── ...
│   ├── merged   
│   │   ├── merged_2023-10-01.txt 
│   │   ├── merged_2023-10-02.txt 
│   │   └── ...
│   └── train   
│       ├── train.csv  
│       ├── valid.csv  
│       └── ...
├── notebook    
│   ├── converter 
│   │   ├── convert_json_to_parquet.ipynb  
│   │   ├── convert_json_to_xlsx.ipynb   
│   │   └── convert_xlsx_to_text.ipynb    
│   └── main     
│       ├── Data_to_text_STSM.ipynb  
│       └── HVAC_statistic_preparation_main.ipynb 
├── research 
│   ├── notebook 
│   │   ├── abnomalies_analysis_in_TS.ipynb 
│   │   ├── anomalies_ARIMA.ipynb 
│   │   └── ...
│   └── report  
│       └── HVAC Automatic Data Analytics.pdf 
└── STSM_model 
    └── ... 

```

**Detailed Description of Files:**

* **bart-t5/ ...:** This folder contains code related to the BART-T5 model, a large language model used for text generation.
* **datasets/ ...:** This folder contains various datasets used in the project.
    * **10/ ...:** Data collected in October.
    * **merged/ ...:** Merged data from multiple sources.
    * **train/ ...:** Data split into training, validation, and test sets for model training and evaluation.
* **notebook/ ...:** This folder contains Jupyter notebooks that enable you to perform tasks related to data analysis, model training, and evaluation.
    * **converter/ ...:** This folder contains notebooks for converting data between different formats (JSON, Parquet, Excel, text).
    * **main/ ...:** This folder contains the main notebooks for the project, including code for data preparation and conversion to text.
* **research/ ...:** This folder contains research conducted within the project, including notebooks for analyzing anomalies in time series.
    * **notebook/ ...:** This folder contains research notebooks.
    * **report/ ...:** This folder contains reports summarizing research findings.
* **STSM_model/ ...:** This folder contains code for the STSM based on [hoangthangta's works](https://github.com/hoangthangta/STSM).

**Running the Code:**
* **notebook/main/HVAC_statistic_preparation_main.ipynb:** Run this code to prepare the data for training and evaluation.
* **notebook/main/Data_to_text_STSM.ipynb:** Training and evaluation using STSM model.

**Next Steps:**

* **Data Collection:** Gather a diverse set of HVAC data and corresponding reports to train the model.
* **Model Development:** Choose appropriate AI models and techniques for data extraction, analysis, and report generation.
* **Training:** Train the model using the collected data and the provided template.
* **Evaluation:** Evaluate the performance of the model on a test dataset, focusing on accuracy, completeness, and clarity of the generated reports.

**Future Enhancements:**

* **Advanced Data Analysis:** Implement advanced data analysis techniques to identify more complex patterns and relationships in the data.
* **Template Customization:** Allow users to customize the report template to fit their specific needs.
* **Multilingual Support:** Extend the model to support report generation in different languages.


