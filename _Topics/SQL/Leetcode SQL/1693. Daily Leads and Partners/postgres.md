SELECT DISTINCT
date_id, make_name, COUNT(lead_id) AS unique_leads, COUNT(partner_id) AS unique_partners 
FROM DailySales;