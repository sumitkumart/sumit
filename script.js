class Disease {
    constructor(name, symptoms, treatment) {
        this.name = name;
        this.symptoms = symptoms;
        this.treatment = treatment;
    }
}

function isPartialMatch(userInput, diseaseSymptom) {
    userInput = userInput.toLowerCase();
    diseaseSymptom = diseaseSymptom.toLowerCase();
    return userInput.includes(diseaseSymptom) || diseaseSymptom.includes(userInput);
}

function symptomChecker(userSymptoms, diseases) {
    const possibleDiseases = {};

    for (const disease of diseases) {
        for (const userSymptom of userSymptoms) {
            for (const diseaseSymptom of disease.symptoms) {
                if (isPartialMatch(userSymptom, diseaseSymptom)) {
                    possibleDiseases[disease.name] = disease.treatment;
                    break;
                }
            }
        }
    }

    return possibleDiseases;
}

document.getElementById('symptomsInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const diseases = [
            new Disease("Influenza (Flu)", ["Fever", "Cough", "Fatigue", "Muscle aches"], "Get plenty of rest, drink fluids, and take over-the-counter medications such as ibuprofen or acetaminophen to relieve fever and aches. If your symptoms are severe, see a doctor."),

            new Disease("Common Cold", ["Runny or stuffy nose", "Sneezing", "Sore throat", "Cough"], "There is no cure for the common cold, but you can relieve your symptoms with over-the-counter medications such as decongestants, cough suppressants, and pain relievers. Drink plenty of fluids and get plenty of rest. If your symptoms are severe or do not improve after 10 days, see a doctor."),

            new Disease("Heart Attack", ["Chest pain or discomfort", "Shortness of breath", "Nausea", "Pain radiating to arm or jaw"], "Aspirin: Aspirin helps to thin the blood and prevent blood clots from forming.\nNitroglycerin: This medication widens the blood vessels and improves blood flow to the heart.\nClot-busting medications: These medications can dissolve blood clots that are blocking blood flow to the heart."),

            new Disease("Sickle Cell Disease", ["Painful episodes (crisis)", "Fatigue", "Jaundice", "Shortness of breath"], "Pain management, blood transfusions, medication, and sometimes bone marrow transplant. If you have this condition, you'll need regular medical care and prescriptions from a doctor."),

            new Disease("Heart Attack", [" Chest pain or discomfort", "Shortness of breathe ", "Nausea Pain radiating to arm or jaw"], "Aspirin: Aspirin helps to thin the blood and prevent blood clots from forming.\nNitroglycerin: This medication widens the blood vessels and improves blood flow to the heart.\nClot - busting medications: These medications can dissolve blood clots that are blocking blood flow to the heart. "),

            new Disease(" Arthritis", ["Joint pain", "Joint swelling", " Stiffness", "Reduced range of motion"], "treatment =Over-the-counter pain relievers: Over-the-counter pain relievers such as ibuprofen (Advil, Motrin IB) and naproxen (Aleve) can help to reduce pain and inflammation.\nPrescription pain relievers: If over - the - counter pain relievers are not effective, your doctor may prescribe stronger pain medications, such as opioids.\n Corticosteroids: Corticosteroids are powerful anti - inflammatory drugs that can be taken orally, injected into the affected joint, or applied to the skin.\n "),

            new Disease("Insomnia", ["Difficulty falling asleep", "Frequent waking during the night", "Daytime fatigue", "Irritability"],
                "Behavioral therapies, sleep hygiene improvement, and medications (prescription or over-the-counter). Doctor's prescription may be required for severe cases."),


            new Disease("Narcolepsy", ["Excessive daytime sleepiness", "Sudden sleep attacks", "Sleep paralysis", "Hallucinations at sleep onset"],
                "Stimulant medications (e.g., modafinil), antidepressants, and sodium oxybate. Doctor's prescription is usually required for medications."),


            new Disease(
                "Seasonal Affective Disorder (SAD)", ["Depressed mood in winter months", "Fatigue", "Increased sleep"],
                "Light therapy, psychotherapy, and antidepressant medications. Doctor's prescription is required for medications."),


            new Disease(
                "Postpartum Depression", ["Depressed mood after childbirth", "Crying spells", "Difficulty bonding with the baby", "Fatigue"],
                "Psychotherapy and antidepressant medications. Doctor's prescription is required for medications."),


            new Disease(
                "Fibromyalgia", ["Widespread pain", "Fatigue", "Sleep disturbances", "Cognitive difficulties"],
                "Medications (e.g., pain relievers, antidepressants), physical therapy, and exercise. Doctor's prescription is often required for specific medications."),


            new Disease("Chronic Fatigue Syndrome (CFS)", ["Persistent fatigue", "Muscle pain", "Cognitive difficulties", "Sleep disturbances"],
                "Symptomatic relief, graded exercise therapy, and cognitive-behavioral therapy. Doctor's prescription may be required for certain medications."),


            new Disease(
                "Irritable Bowel Syndrome (IBS)", ["Abdominal pain", "Diarrhea or constipation", "Bloating", "Changes in bowel habits"],
                "Dietary changes, medications (e.g., antispasmodics, laxatives), and stress management. Doctor's prescription may be required for specific medications."),


            new Disease(
                "Chronic Obstructive Pulmonary Disease (COPD)", ["Shortness of breath", "Chronic cough", "Wheezing", "Excessive mucus production"],
                "Bronchodilator medications, inhaled corticosteroids, and oxygen therapy. Doctor's prescription is usually required for medications."),

            new Disease(
                "Meningitis", ["Severe headache", "Neck stiffness", "Fever", "Photophobia (sensitivity to light)"],
                "Antibiotics (if bacterial), antiviral medications (if viral), and supportive care (e.g., pain relief, fever reducers). Doctor's prescription is always required for specific medications."),

            new Disease(
                "Encephalitis", ["Fever", "Headache", "Confusion", "Seizures"],
                "Antiviral medications, supportive care (e.g., pain relief, fever reducers), and hospitalization in severe cases. Doctor's prescription is always required for specific medications."),

            new Disease(
                "Multiple Myeloma", ["Bone pain", "Fatigue", "Frequent infections", "Anemia"],
                "Treatment may include chemotherapy, immunotherapy, and stem cell transplantation. Consultation with an oncologist is essential, and a prescription for medications is likely."),

            new Disease(
                "Leukemia", ["Fatigue", "Frequent infections", "Easy bruising", "Swollen lymph nodes"],
                "Treatment may involve chemotherapy, targeted therapy, and stem cell transplantation. Consultation with a hematologist or oncologist is necessary, and a prescription for medications is likely."),

            new Disease(
                "Lymphoma", ["Enlarged lymph nodes", "Night sweats", "Fatigue", "Unexplained weight loss"],
                "Treatment may include chemotherapy, immunotherapy, and radiation therapy. Consultation with an oncologist is necessary, and a prescription for medications is likely."),

            new Disease(
                "Myasthenia Gravis", ["Muscle weakness", "Fatigue", "Difficulty swallowing", "Double vision"],
                "Treatment may involve medications (e.g., cholinesterase inhibitors), immunosuppressive drugs, and thymectomy. Consultation with a neurologist is necessary, and a prescription for medications is likely."),

            new Disease(
                "Guillain-Barré Syndrome", ["Muscle weakness", "Tingling or numbness", "Difficulty moving limbs", "Breathing difficulties"],
                "Treatment may include intravenous immunoglobulin (IVIG) and plasmapheresis. Consultation with a neurologist is necessary, and a prescription for treatments is likely."),

            new Disease(
                "Osteosarcoma", ["Bone pain", "Swelling", "Limited mobility", "Fractures"],
                "Treatment may involve surgery, chemotherapy, and sometimes radiation therapy. Consultation with an orthopedic surgeon or oncologist is necessary."),

            new Disease(
                "Prostate Cancer", ["Urinary difficulties", "Blood in urine or semen", "Erectile dysfunction", "Bone pain"],
                "Treatment options include surgery, radiation therapy, hormone therapy, and chemotherapy. Consultation with a urologist or oncologist is necessary, and a prescription for medications is likely."),

            new Disease(
                "Ovarian Cancer", ["Abdominal bloating", "Pelvic pain", "Changes in bowel habits", "Fatigue"],
                "Treatment may involve surgery, chemotherapy, and targeted therapy. Consultation with a gynecologic oncologist is necessary, and a prescription for medications is likely."),

            new Disease(
                "Colon Cancer", ["Blood in stool", "Abdominal pain", "Changes in bowel habits", "Unexplained weight loss"],
                "Treatment may involve surgery, chemotherapy, and sometimes radiation therapy. Consultation with a colorectal surgeon or oncologist is necessary."),

            new Disease(
                "Pancreatic Cancer", ["Abdominal pain", "Jaundice (yellowing of the skin)", "Weight loss", "Loss of appetite"],
                "Treatment may involve surgery, chemotherapy, and sometimes radiation therapy. Consultation with a pancreatic surgeon or oncologist is necessary, and a prescription for medications is likely."),



        ];
        const userSymptoms = this.value.split('\n').map(symptom => symptom.trim());

        const possibleDiseases = symptomChecker(userSymptoms, diseases);
        const resultsContainer = document.getElementById('results');

        resultsContainer.innerHTML = '';


        if (Object.keys(possibleDiseases).length === 0) {
            resultsContainer.innerHTML = "<p style='color: red;'>No matching diseases found for your symptoms.</p>";
        } else {
            const resultsList = document.createElement('ul');
            for (const disease in possibleDiseases) {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${disease}</strong><br>-${possibleDiseases[disease]}`;
                resultsList.appendChild(listItem);
            }
            resultsContainer.appendChild(resultsList);
        }
    }
});