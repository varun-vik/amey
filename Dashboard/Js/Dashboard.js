var dashboard = {
    constants: {
        instanceRecordTemplate: '<tr><td><input class="expand" type="button" value="+" data-subdomain="{{SubDomain}}" data-id="{{Departmentid}}" /></td><td>{{DepartmentName}}</td><td>{{ElectronicFileCreated}}</td><td>{{ElectronicFilePending}}</td><td>{{ElectronicFileClosed}}</td><td>{{PhysicalFileCreated}}</td><td>{{PhysicalFilePending}}</td><td>{{PhysicalFileClosed}}</td><td>{{ElectronicReceiptCreated}}</td><td>{{PhysicalReceiptCreated}}</td></tr>',
        departmentRecordTemplate: '<tr style="background-color: cadetblue;"><td></td><td>{{DepartmentName}}</td><td>{{ElectronicFileCreated}}</td><td>{{ElectronicFilePending}}</td><td>{{ElectronicFileClosed}}</td><td>{{PhysicalFileCreated}}</td><td>{{PhysicalFilePending}}</td><td>{{PhysicalFileClosed}}</td><td>{{ElectronicReceiptCreated}}</td><td>{{PhysicalReceiptCreated}}</td></tr>'
    },
    getDashboardData: function () {
        $.ajax({
            type: "GET",
            url: "https://localhost:44362/Home/GetData",
            success: function (response) {
                $.each(response, function (i, x) {
                    x.display = "block";
                    var compiledTemplate = Handlebars.compile(dashboard.constants.instanceRecordTemplate);
                    $('#dashboardBody').append(compiledTemplate(x));
                });
            }
        });
    },
    getInstanceData: function (instanceId, subdomain) {
        $.ajax({
            type: "GET",
            url: "https://localhost:44362/Home/GetInstanceData?type=Department&subdomain=" + subdomain,
            success: function (response) {
                $.each(response, function (i, x) {
                    x.display = "block";
                    var compiledTemplate = Handlebars.compile(dashboard.constants.departmentRecordTemplate);
                    var html = compiledTemplate(x);
                    debugger;
                    $('input.expand[data-subdomain="' + subdomain + '"]').parent().parent().after(html);
                });
                $('input.expand[data-subdomain="' + subdomain + '"]').val('-');
                $('input.expand[data-subdomain="' + subdomain + '"]').data('loaded', 'true');
            }
        });
    },
    getSectionData: function (instanceId, subdomain) {
        $.ajax({
            type: "GET",
            url: "https://localhost:44362/Home/GetInstanceData?type=Department&subdomain=" + subdomain,
            success: function (response) {
                $.each(response, function (i, x) {
                    x.display = "block";
                    var compiledTemplate = Handlebars.compile(dashboard.constants.departmentRecordTemplate);
                    var html = compiledTemplate(x);
                    debugger;
                    $('input.expand[data-subdomain="' + subdomain + '"]').parent().parent().after(html);
                });
                $('input.expand[data-subdomain="' + subdomain + '"]').val('-');
                $('input.expand[data-subdomain="' + subdomain + '"]').data('loaded', 'true');
            }
        });
    }
}