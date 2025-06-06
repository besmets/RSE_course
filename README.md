# RSE repository
### Information and scripts for the practical exercises of the course "Remote Sensing of the Environment" of the Vrije Universiteit Brussel (VUB)
#### *Version 1.1 (2025)*   
***Author:*** *Prof. Dr. Benoît SMETS - Vrije Universiteit Brussel / Royal Museum for Central Africa, Belgium*

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)   
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Jupyter Notebook](https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white) ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) 

-------

### Introduction

The course [***Remote Sensing of the Environment***](https://canvas.vub.be/courses/35191) is proposed to master students of the [**VUB**](https://www.vub.be) and [**KULeuven**](https://www.kuleuven.be/), mostly in the frame of the [***Master of Science in Geography***](https://www.vub.be/en/studying-vub/all-study-programmes-vub/bachelors-and-masters-programmes-vub/master-in-geography-vub). It is complementary to the course ***Advanced Earth Observation Techniques*** and gives an overview of different **imaging remote sensing techniques** used to study environmental issues, and more specifically **natural hazards**. The content of the course focuses on how to take advantage of the image characteristics (i.e., spectral range and resolution, spatial and temporal resolutions, passive vs. active sensor, geometry of acquisition, etc.) to perform change/hotspot detection, atmospheric and thermal measurements, ground deformation monitoring and topographic reconstruction. If most of the described techniques make use of satellite imagery, they can also be applied to air- and ground-based image acquisitions. A selection of the topics discussed in the theoretical part of the course is illustrated with practical case studies to be carried out by the students using open-source remote sensing software. Results of the practical work are summarized and discussed in a series of scientific reports (assignements) to be produced individually by each student.

The targeted public is master students who would like to discover the potential of imaging remote sensing to study natural (and human-induced) processes, such as, volcanic eruptions, landslides, floods, forest fires, gas emissions, ground subsidence, etc.

This application-oriented course of 3 ECTS is split into **8 modules of 3 hours mixing theory and practice**, each module covering a specific methodology. As several remote sensing techniques are covered by this relatively small course, the description of the methods remains concise and focuses on the fundamental knowledge required to start using the techniques. Additional key information and references are provided to the students in case they would like to go deeper into the techniques covered.

More information about this course can be found on the VUB's CANVAS platform, [here](https://canvas.vub.be/courses/35191). Questions can also be sent by e-mail to ***"benoit . smets (at) vub . be"***

-------

### Description of the repository

In this repository, you will find key information to properly perform the exercices of the course "Remote Sensing of the Environment". The folder **"Computer_setup"** provide installation guides to configure your computer and install the required software and Python virtual environment.

The folders **"Module 1"** to **"Module 8"** contain the required scripts and descriptions to perform the exercises for each module of the course. Here is the list of the modules and the remote sensing methodology they tackle:
```diff
- Module 1: Introduction to raster and geospatial image processing
- Module 2: Remote sensing of trace gases and aerosols
- Module 3: Thermal remote sensing
- Module 4: Digital image correlation
- Module 5: SfM-MVS photogrammetry
- Module 6: 4D photogrammetry
- Module 7: SAR remote sensing
- Module 8: SAR interferometry
```

The **"Change_log"** file provides the details of each update, starting from the first version created in early 2023.

The folder **"Additional_information"**, as self-explained by its name, provide useful additional information that can be used by the student to perform the exercises and use the remote sensing techniques learned during the course.

-------

### PRACTICAL EXERCISES PER MODULE
(Please, open and save the Colab notebook elsewhere to perform the exercise out of the GitHub account!)  

- Module 1 – [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/besmets/RSE_course/blob/main/RSE_Lecture_01_image_processing_with_Python.ipynb)
- Module 2 – Exercise: [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/besmets/RSE_course/blob/main/RSE_Lecture_02_RS_of_ash_and_gas.ipynb) ; GIF animation: [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/besmets/RSE_course/blob/main/RSE_Lecture_02_GIF_Animation.ipynb)
- Module 3 – Exercises on the ESA SNAP toolbox and using existing online tools. Data plotting: [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/besmets/RSE_course/blob/main/RSE_Lecture_03_Plotting_NHI_and_MODVOLC_data.ipynb)
- Module 4 – [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/besmets/RSE_course/blob/main/RSE_Lecture_04_Digital_Image_Correlation_v2.ipynb)  
- Module 5 – Exercise offline, on a computer (additional [information and tips here](https://github.com/GeoRiskA/SfM-MVS_photogrammetry_tips)!)
- Module 6 – Exercise offline, on a computer (additional [information and tips here](https://github.com/GeoRiskA/SfM-MVS_photogrammetry_tips)!)
- Module 7 – Exercise offline + See the [GEE script](https://www.un-spider.org/advisory-support/recommended-practices/recommended-practice-google-earth-engine-flood-mapping/step-by-step) provided by the United Nations
- Module 8 – Exercise offline, on a computer

-------

### How to cite

In order to allow the students to cite the documentation provided during this course, each version of the repository will be archived on Zenodo around May, and will come with a DOI (once archived). The reference to cite is provided here below:

#### Citation for v.1.1 (2025): 
Smets, B. (2025). RSE Repository: Information and scripts for the practical exercises of the course "Remote Sensing of the Environment" of the Vrije Universiteit Brussel (VUB). Version 1.1., https://github.com/besmets/RSE_course/. (Last visited: DD/MM/YYY).
