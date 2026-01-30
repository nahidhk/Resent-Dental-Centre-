CREATE TABLE patient_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date VARCHAR(20),
    rpid VARCHAR(20),
    userNumber VARCHAR(15),
    medicineData JSON,
    cc_oe_avd_xry JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
