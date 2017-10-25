import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const jobData = { "connectionString": "Data Source=SVCPLMGSQL01.dswh.ds.adp.com;Initial Catalog=msdb;Integrated Security=True", "jobs": [{ "id": "aa3fe4e1-c8a1-4078-b2a5-2ffe2bcaa51b", "name": "ACCOUNTING- Geneate Chrome Invoice Data" }, { "id": "7021f513-fb1d-45e5-9ac6-a936542fc9e9", "name": "AdesaPipeLineRunLists_V1" }, { "id": "e2bb1980-9320-405e-bfcd-b71c5eb09735", "name": "ADP Relations Partner Token" }, { "id": "0a57a0e8-3915-4800-94ba-b0aafd4c9202", "name": "AutoNation_Completed_Appraisals" }, { "id": "39499499-3d60-41ee-9c70-05c20acb247e", "name": "AutoNation_Inventory" }, { "id": "ab485d1a-ca5a-4699-8fb8-5c1ce04e0321", "name": "Back Of Book Inventory Table Merge" }, { "id": "eca2718d-1dcb-4965-bac3-7677dfb11351", "name": "Calculate Market Data" }, { "id": "e2597885-8103-4c04-96c7-fc9d4c01bfed", "name": "Chrome Data Processing Production" }, { "id": "4758970f-78ac-4fbb-af18-4ee1f68b789a", "name": "chrome process notification" }] }
    const jobSteps =
      [
        { "id": "aa3fe4e1-c8a1-4078-b2a5-2ffe2bcaa51b", "name": "ACCOUNTING- Geneate Chrome Invoice Data", "connectionString": "Data Source=SVCPLMGSQL01.dswh.ds.adp.com;Initial Catalog=msdb;Integrated Security=True", "allSteps": [{ "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 1, "stepName": "Add missing chrome styles", "stepType": "TSQL", "stepExecutable": "execute dbo.populate_extra_chrome_styles", "executeOnDatabase": "BooksDB", "lastStatus": true, "lastRunDuration": 31, "lastRunDate": 20170930, "lastRunTime": 50000 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 2, "stepName": "Add Chrome Mapping", "stepType": "TSQL", "stepExecutable": "execute dbo.populate_extra_chrome_mapping;", "executeOnDatabase": "BooksDB", "lastStatus": true, "lastRunDuration": 0, "lastRunDate": 20170930, "lastRunTime": 50031 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 3, "stepName": "Update Body Type and Vehicle Type", "stepType": "TSQL", "stepExecutable": "EXEC   newcariq.dbo.nc_update_deal_body_sales_ft;", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 36, "lastRunDate": 20170930, "lastRunTime": 50031 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 4, "stepName": "Update Chrome Body Type and Market Class", "stepType": "TSQL", "stepExecutable": "EXEC newcariq.dbo.nc_update_chrome_body_type;", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 328, "lastRunDate": 20170930, "lastRunTime": 50107 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 5, "stepName": "Populate Chrome Details on RB_SALES_FT", "stepType": "TSQL", "stepExecutable": "EXEC newcariq.dbo.rb_populate_sales_chrome_details \r\n    @p_dw_role = NULL,\r\n    @p_vehicle_type = 'N';", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 24, "lastRunDate": 20170930, "lastRunTime": 50435 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 6, "stepName": "Insert VIN Details for Inventory", "stepType": "TSQL", "stepExecutable": "EXECUTE dbo.nc_populate_inventory_vin_details_threaded", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 141, "lastRunDate": 20170930, "lastRunTime": 50459 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 7, "stepName": "Update Chrome Styles via model code", "stepType": "TSQL", "stepExecutable": "EXEC  newcariq.dbo.nc_update_chrome_style_via_model_code \r\n    @p_dms_dealership_id = NULL;", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 35, "lastRunDate": 20170930, "lastRunTime": 50640 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 8, "stepName": "Update Colors", "stepType": "TSQL", "stepExecutable": "EXECUTE  dbo.nc_update_missing_exterior_colors\r\nEXECUTE  dbo.nc_update_inventory_chrome_color\r\nEXECUTE  dbo.nc_update_sales_chrome_color", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 135, "lastRunDate": 20170930, "lastRunTime": 50715 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 9, "stepName": "Update Stock Images for incentives", "stepType": "TSQL", "stepExecutable": "EXEC  newcariq.dbo.nc_update_stock_images;", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 12, "lastRunDate": 20170930, "lastRunTime": 50850 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 10, "stepName": "Send Report", "stepType": "TSQL", "stepExecutable": "DECLARE @tableHTML  NVARCHAR(MAX) ;\r\nDECLARE @DW Int,@Month Int\r\nSelect @DW = DATEPART(DW,GETDATE())\r\nSelect @Month = DATEPART(DD,GETDATE())  \r\n--Print @day\r\nBEGIN\r\n\r\nSET @tableHTML =\r\n    N'<H3>JOB STATUS REPORT</H3>' +\r\n    N'<table border=\"1\">' +\r\n    N'<tr><th> # </th><th>STEP NAME</th><th>DURATION</th><th>LAST_RUN</th><th>STEP STATUS</th><th>START_TIME</th><th>END_TIME</th></tr>' +\r\n    CAST ( ( SELECT \r\n\t\t\t\ttd = ' ' + CAST(ROW_NUMBER() OVER (ORDER BY step_id ASC) AS VARCHAR) + ' ', '', \r\n\t\t\t\ttd = step_name /*CASE WHEN (step_id = 1 ) THEN 'DMS DATA BATCH FILE(getfiles.bat) EXECUTION' \r\n\t\t\t\t\t\tWHEN (@DW = 1 AND step_id = 2) THEN 'DBCC FULL CHECK' ELSE step_name END*/, '', \r\n\t\t\t\ttd = (CONVERT(VARCHAR(2),LEFT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN(last_run_duration)))+CONVERT(VARCHAR(6),last_run_duration),2))+':'+CONVERT(VARCHAR(2),SUBSTRING((CONVERT(VARCHAR(6),REPLICATE('0',6-LEN(last_run_duration)))+CONVERT(VARCHAR(6),last_run_duration)),3,2))+':'+CONVERT(VARCHAR(2),RIGHT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN(last_run_duration)))+CONVERT(VARCHAR(6),last_run_duration),2))), '',\r\n\t\t\t\ttd = (CASE  last_run_date WHEN 0 THEN NULL ELSE \r\n\t\t\t\t(CONVERT(VARCHAR(10),SUBSTRING(CONVERT(VARCHAR(8), last_run_date),5,2))+'/'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),7,2)+'/'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),1,4)) END), '',\r\n\t\t\t\ttd = (CASE last_run_outcome WHEN 0 THEN 'FAILED' ELSE 'SUCCESS' end) , '',\r\n\t\t\t\ttd = CASE  last_run_date WHEN 0 THEN NULL ELSE\r\n\t\t\t\t\t\t\t\t\t\t(CONVERT(DATETIME,CONVERT(VARCHAR(10),SUBSTRING(CONVERT(VARCHAR(8), last_run_date),1,4)+'-'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),5,2))+'-'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),7,2)+' '+LEFT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),2)+':'+SUBSTRING(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),3,2)+':'+RIGHT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),2))) END,'',\r\n\t\t\t\ttd = CASE  last_run_date WHEN 0 THEN NULL ELSE \r\n\t\t\t\t\t\t\t\t\t\t(DATEADD(second,CONVERT(INT,RIGHT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_duration)))+CONVERT(VARCHAR(6), last_run_duration),2)),(DATEADD(mi,CONVERT(INT,SUBSTRING(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_duration))) + CONVERT(VARCHAR(6), last_run_duration),3,2)),(DATEADD(hh,CONVERT(INT,LEFT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_duration))) + CONVERT(VARCHAR(6), last_run_duration),2)),CONVERT(DATETIME,CONVERT(VARCHAR(10),SUBSTRING(CONVERT(VARCHAR(8), last_run_date),1,4)+'-'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),5,2))+'-'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),7,2)+' '+LEFT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),2)+':'+SUBSTRING(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),3,2)+':'+RIGHT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),2)))))))) END\t\r\n FROM msdb.dbo.sysjobsteps\r\n\t\t\tWHERE Job_id IN (SELECT job_id FROM msdb.dbo.sysjobs AS s WHERE name = 'NEWCARIQ - PREP TABLES AFTER CHROME')\r\n\t\t\t /*AND Step_Id NOT IN (5,7,8,11)*/ \r\n\t\t\tORDER BY step_id ASC\r\n             FOR XML PATH('tr'), TYPE \r\n    ) AS NVARCHAR(MAX) ) +\r\n    N'</table>'+N'<br/>' ;\r\nEND\r\n\r\ndeclare @emailSubject varchar(100)\r\r\nset @emailSubject = @@servername + ' - PROCESS REPORT: NEWCARIQ - Prep Tables After Chrome'\r\n\r\nEXEC msdb.dbo.sp_send_dbmail \r\n\t@profile_name = 'DBMailProfile',\r\n\t@recipients='CDK.LM-Support@cdk.com',  \r\n\t@subject = @emailSubject,\r\n    @body = @tableHTML,\r\n    @body_format = 'HTML' ;\r\n    \r\n  \r\n", "executeOnDatabase": "master", "lastStatus": true, "lastRunDuration": 0, "lastRunDate": 20170930, "lastRunTime": 50902 }] },
        { "id": "7021f513-fb1d-45e5-9ac6-a936542fc9e9", "name": "AdesaPipeLineRunLists_V1", "connectionString": "Data Source=SVCPLMGSQL01.dswh.ds.adp.com;Initial Catalog=msdb;Integrated Security=True", "allSteps": [{ "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 1, "stepName": "Add missing chrome styles", "stepType": "TSQL", "stepExecutable": "execute dbo.populate_extra_chrome_styles", "executeOnDatabase": "BooksDB", "lastStatus": true, "lastRunDuration": 31, "lastRunDate": 20170930, "lastRunTime": 50000 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 2, "stepName": "Add Chrome Mapping", "stepType": "TSQL", "stepExecutable": "execute dbo.populate_extra_chrome_mapping;", "executeOnDatabase": "BooksDB", "lastStatus": true, "lastRunDuration": 0, "lastRunDate": 20170930, "lastRunTime": 50031 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 3, "stepName": "Update Body Type and Vehicle Type", "stepType": "TSQL", "stepExecutable": "EXEC   newcariq.dbo.nc_update_deal_body_sales_ft;", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 36, "lastRunDate": 20170930, "lastRunTime": 50031 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 4, "stepName": "Update Chrome Body Type and Market Class", "stepType": "TSQL", "stepExecutable": "EXEC newcariq.dbo.nc_update_chrome_body_type;", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 328, "lastRunDate": 20170930, "lastRunTime": 50107 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 5, "stepName": "Populate Chrome Details on RB_SALES_FT", "stepType": "TSQL", "stepExecutable": "EXEC newcariq.dbo.rb_populate_sales_chrome_details \r\n    @p_dw_role = NULL,\r\n    @p_vehicle_type = 'N';", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 24, "lastRunDate": 20170930, "lastRunTime": 50435 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 6, "stepName": "Insert VIN Details for Inventory", "stepType": "TSQL", "stepExecutable": "EXECUTE dbo.nc_populate_inventory_vin_details_threaded", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 141, "lastRunDate": 20170930, "lastRunTime": 50459 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 7, "stepName": "Update Chrome Styles via model code", "stepType": "TSQL", "stepExecutable": "EXEC  newcariq.dbo.nc_update_chrome_style_via_model_code \r\n    @p_dms_dealership_id = NULL;", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 35, "lastRunDate": 20170930, "lastRunTime": 50640 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 8, "stepName": "Update Colors", "stepType": "TSQL", "stepExecutable": "EXECUTE  dbo.nc_update_missing_exterior_colors\r\nEXECUTE  dbo.nc_update_inventory_chrome_color\r\nEXECUTE  dbo.nc_update_sales_chrome_color", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 135, "lastRunDate": 20170930, "lastRunTime": 50715 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 9, "stepName": "Update Stock Images for incentives", "stepType": "TSQL", "stepExecutable": "EXEC  newcariq.dbo.nc_update_stock_images;", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 12, "lastRunDate": 20170930, "lastRunTime": 50850 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 10, "stepName": "Send Report", "stepType": "TSQL", "stepExecutable": "DECLARE @tableHTML  NVARCHAR(MAX) ;\r\nDECLARE @DW Int,@Month Int\r\nSelect @DW = DATEPART(DW,GETDATE())\r\nSelect @Month = DATEPART(DD,GETDATE())  \r\n--Print @day\r\nBEGIN\r\n\r\nSET @tableHTML =\r\n    N'<H3>JOB STATUS REPORT</H3>' +\r\n    N'<table border=\"1\">' +\r\n    N'<tr><th> # </th><th>STEP NAME</th><th>DURATION</th><th>LAST_RUN</th><th>STEP STATUS</th><th>START_TIME</th><th>END_TIME</th></tr>' +\r\n    CAST ( ( SELECT \r\n\t\t\t\ttd = ' ' + CAST(ROW_NUMBER() OVER (ORDER BY step_id ASC) AS VARCHAR) + ' ', '', \r\n\t\t\t\ttd = step_name /*CASE WHEN (step_id = 1 ) THEN 'DMS DATA BATCH FILE(getfiles.bat) EXECUTION' \r\n\t\t\t\t\t\tWHEN (@DW = 1 AND step_id = 2) THEN 'DBCC FULL CHECK' ELSE step_name END*/, '', \r\n\t\t\t\ttd = (CONVERT(VARCHAR(2),LEFT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN(last_run_duration)))+CONVERT(VARCHAR(6),last_run_duration),2))+':'+CONVERT(VARCHAR(2),SUBSTRING((CONVERT(VARCHAR(6),REPLICATE('0',6-LEN(last_run_duration)))+CONVERT(VARCHAR(6),last_run_duration)),3,2))+':'+CONVERT(VARCHAR(2),RIGHT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN(last_run_duration)))+CONVERT(VARCHAR(6),last_run_duration),2))), '',\r\n\t\t\t\ttd = (CASE  last_run_date WHEN 0 THEN NULL ELSE \r\n\t\t\t\t(CONVERT(VARCHAR(10),SUBSTRING(CONVERT(VARCHAR(8), last_run_date),5,2))+'/'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),7,2)+'/'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),1,4)) END), '',\r\n\t\t\t\ttd = (CASE last_run_outcome WHEN 0 THEN 'FAILED' ELSE 'SUCCESS' end) , '',\r\n\t\t\t\ttd = CASE  last_run_date WHEN 0 THEN NULL ELSE\r\n\t\t\t\t\t\t\t\t\t\t(CONVERT(DATETIME,CONVERT(VARCHAR(10),SUBSTRING(CONVERT(VARCHAR(8), last_run_date),1,4)+'-'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),5,2))+'-'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),7,2)+' '+LEFT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),2)+':'+SUBSTRING(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),3,2)+':'+RIGHT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),2))) END,'',\r\n\t\t\t\ttd = CASE  last_run_date WHEN 0 THEN NULL ELSE \r\n\t\t\t\t\t\t\t\t\t\t(DATEADD(second,CONVERT(INT,RIGHT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_duration)))+CONVERT(VARCHAR(6), last_run_duration),2)),(DATEADD(mi,CONVERT(INT,SUBSTRING(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_duration))) + CONVERT(VARCHAR(6), last_run_duration),3,2)),(DATEADD(hh,CONVERT(INT,LEFT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_duration))) + CONVERT(VARCHAR(6), last_run_duration),2)),CONVERT(DATETIME,CONVERT(VARCHAR(10),SUBSTRING(CONVERT(VARCHAR(8), last_run_date),1,4)+'-'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),5,2))+'-'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),7,2)+' '+LEFT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),2)+':'+SUBSTRING(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),3,2)+':'+RIGHT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),2)))))))) END\t\r\n FROM msdb.dbo.sysjobsteps\r\n\t\t\tWHERE Job_id IN (SELECT job_id FROM msdb.dbo.sysjobs AS s WHERE name = 'NEWCARIQ - PREP TABLES AFTER CHROME')\r\n\t\t\t /*AND Step_Id NOT IN (5,7,8,11)*/ \r\n\t\t\tORDER BY step_id ASC\r\n             FOR XML PATH('tr'), TYPE \r\n    ) AS NVARCHAR(MAX) ) +\r\n    N'</table>'+N'<br/>' ;\r\nEND\r\n\r\ndeclare @emailSubject varchar(100)\r\r\nset @emailSubject = @@servername + ' - PROCESS REPORT: NEWCARIQ - Prep Tables After Chrome'\r\n\r\nEXEC msdb.dbo.sp_send_dbmail \r\n\t@profile_name = 'DBMailProfile',\r\n\t@recipients='CDK.LM-Support@cdk.com',  \r\n\t@subject = @emailSubject,\r\n    @body = @tableHTML,\r\n    @body_format = 'HTML' ;\r\n    \r\n  \r\n", "executeOnDatabase": "master", "lastStatus": true, "lastRunDuration": 0, "lastRunDate": 20170930, "lastRunTime": 50902 }] },
        { "id": "e2bb1980-9320-405e-bfcd-b71c5eb09735", "name": "ADP Relations Partner Token", "connectionString": "Data Source=SVCPLMGSQL01.dswh.ds.adp.com;Initial Catalog=msdb;Integrated Security=True", "allSteps": [{ "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 1, "stepName": "Add missing chrome styles", "stepType": "TSQL", "stepExecutable": "execute dbo.populate_extra_chrome_styles", "executeOnDatabase": "BooksDB", "lastStatus": true, "lastRunDuration": 31, "lastRunDate": 20170930, "lastRunTime": 50000 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 2, "stepName": "Add Chrome Mapping", "stepType": "TSQL", "stepExecutable": "execute dbo.populate_extra_chrome_mapping;", "executeOnDatabase": "BooksDB", "lastStatus": true, "lastRunDuration": 0, "lastRunDate": 20170930, "lastRunTime": 50031 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 3, "stepName": "Update Body Type and Vehicle Type", "stepType": "TSQL", "stepExecutable": "EXEC   newcariq.dbo.nc_update_deal_body_sales_ft;", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 36, "lastRunDate": 20170930, "lastRunTime": 50031 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 4, "stepName": "Update Chrome Body Type and Market Class", "stepType": "TSQL", "stepExecutable": "EXEC newcariq.dbo.nc_update_chrome_body_type;", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 328, "lastRunDate": 20170930, "lastRunTime": 50107 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 5, "stepName": "Populate Chrome Details on RB_SALES_FT", "stepType": "TSQL", "stepExecutable": "EXEC newcariq.dbo.rb_populate_sales_chrome_details \r\n    @p_dw_role = NULL,\r\n    @p_vehicle_type = 'N';", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 24, "lastRunDate": 20170930, "lastRunTime": 50435 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 6, "stepName": "Insert VIN Details for Inventory", "stepType": "TSQL", "stepExecutable": "EXECUTE dbo.nc_populate_inventory_vin_details_threaded", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 141, "lastRunDate": 20170930, "lastRunTime": 50459 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 7, "stepName": "Update Chrome Styles via model code", "stepType": "TSQL", "stepExecutable": "EXEC  newcariq.dbo.nc_update_chrome_style_via_model_code \r\n    @p_dms_dealership_id = NULL;", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 35, "lastRunDate": 20170930, "lastRunTime": 50640 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 8, "stepName": "Update Colors", "stepType": "TSQL", "stepExecutable": "EXECUTE  dbo.nc_update_missing_exterior_colors\r\nEXECUTE  dbo.nc_update_inventory_chrome_color\r\nEXECUTE  dbo.nc_update_sales_chrome_color", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 135, "lastRunDate": 20170930, "lastRunTime": 50715 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 9, "stepName": "Update Stock Images for incentives", "stepType": "TSQL", "stepExecutable": "EXEC  newcariq.dbo.nc_update_stock_images;", "executeOnDatabase": "newcariq", "lastStatus": true, "lastRunDuration": 12, "lastRunDate": 20170930, "lastRunTime": 50850 }, { "jobId": "bd30a752-d10e-4dbd-b2a9-fbd27d82f677", "stepId": 10, "stepName": "Send Report", "stepType": "TSQL", "stepExecutable": "DECLARE @tableHTML  NVARCHAR(MAX) ;\r\nDECLARE @DW Int,@Month Int\r\nSelect @DW = DATEPART(DW,GETDATE())\r\nSelect @Month = DATEPART(DD,GETDATE())  \r\n--Print @day\r\nBEGIN\r\n\r\nSET @tableHTML =\r\n    N'<H3>JOB STATUS REPORT</H3>' +\r\n    N'<table border=\"1\">' +\r\n    N'<tr><th> # </th><th>STEP NAME</th><th>DURATION</th><th>LAST_RUN</th><th>STEP STATUS</th><th>START_TIME</th><th>END_TIME</th></tr>' +\r\n    CAST ( ( SELECT \r\n\t\t\t\ttd = ' ' + CAST(ROW_NUMBER() OVER (ORDER BY step_id ASC) AS VARCHAR) + ' ', '', \r\n\t\t\t\ttd = step_name /*CASE WHEN (step_id = 1 ) THEN 'DMS DATA BATCH FILE(getfiles.bat) EXECUTION' \r\n\t\t\t\t\t\tWHEN (@DW = 1 AND step_id = 2) THEN 'DBCC FULL CHECK' ELSE step_name END*/, '', \r\n\t\t\t\ttd = (CONVERT(VARCHAR(2),LEFT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN(last_run_duration)))+CONVERT(VARCHAR(6),last_run_duration),2))+':'+CONVERT(VARCHAR(2),SUBSTRING((CONVERT(VARCHAR(6),REPLICATE('0',6-LEN(last_run_duration)))+CONVERT(VARCHAR(6),last_run_duration)),3,2))+':'+CONVERT(VARCHAR(2),RIGHT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN(last_run_duration)))+CONVERT(VARCHAR(6),last_run_duration),2))), '',\r\n\t\t\t\ttd = (CASE  last_run_date WHEN 0 THEN NULL ELSE \r\n\t\t\t\t(CONVERT(VARCHAR(10),SUBSTRING(CONVERT(VARCHAR(8), last_run_date),5,2))+'/'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),7,2)+'/'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),1,4)) END), '',\r\n\t\t\t\ttd = (CASE last_run_outcome WHEN 0 THEN 'FAILED' ELSE 'SUCCESS' end) , '',\r\n\t\t\t\ttd = CASE  last_run_date WHEN 0 THEN NULL ELSE\r\n\t\t\t\t\t\t\t\t\t\t(CONVERT(DATETIME,CONVERT(VARCHAR(10),SUBSTRING(CONVERT(VARCHAR(8), last_run_date),1,4)+'-'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),5,2))+'-'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),7,2)+' '+LEFT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),2)+':'+SUBSTRING(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),3,2)+':'+RIGHT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),2))) END,'',\r\n\t\t\t\ttd = CASE  last_run_date WHEN 0 THEN NULL ELSE \r\n\t\t\t\t\t\t\t\t\t\t(DATEADD(second,CONVERT(INT,RIGHT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_duration)))+CONVERT(VARCHAR(6), last_run_duration),2)),(DATEADD(mi,CONVERT(INT,SUBSTRING(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_duration))) + CONVERT(VARCHAR(6), last_run_duration),3,2)),(DATEADD(hh,CONVERT(INT,LEFT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_duration))) + CONVERT(VARCHAR(6), last_run_duration),2)),CONVERT(DATETIME,CONVERT(VARCHAR(10),SUBSTRING(CONVERT(VARCHAR(8), last_run_date),1,4)+'-'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),5,2))+'-'+SUBSTRING(CONVERT(VARCHAR(8), last_run_date),7,2)+' '+LEFT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),2)+':'+SUBSTRING(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),3,2)+':'+RIGHT(CONVERT(VARCHAR(6),REPLICATE('0',6-LEN( last_run_time)))+CONVERT(VARCHAR(6), last_run_time),2)))))))) END\t\r\n FROM msdb.dbo.sysjobsteps\r\n\t\t\tWHERE Job_id IN (SELECT job_id FROM msdb.dbo.sysjobs AS s WHERE name = 'NEWCARIQ - PREP TABLES AFTER CHROME')\r\n\t\t\t /*AND Step_Id NOT IN (5,7,8,11)*/ \r\n\t\t\tORDER BY step_id ASC\r\n             FOR XML PATH('tr'), TYPE \r\n    ) AS NVARCHAR(MAX) ) +\r\n    N'</table>'+N'<br/>' ;\r\nEND\r\n\r\ndeclare @emailSubject varchar(100)\r\r\nset @emailSubject = @@servername + ' - PROCESS REPORT: NEWCARIQ - Prep Tables After Chrome'\r\n\r\nEXEC msdb.dbo.sp_send_dbmail \r\n\t@profile_name = 'DBMailProfile',\r\n\t@recipients='CDK.LM-Support@cdk.com',  \r\n\t@subject = @emailSubject,\r\n    @body = @tableHTML,\r\n    @body_format = 'HTML' ;\r\n    \r\n  \r\n", "executeOnDatabase": "master", "lastStatus": true, "lastRunDuration": 0, "lastRunDate": 20170930, "lastRunTime": 50902 }] }
      ]

    return { jobData, jobSteps };
  }
}