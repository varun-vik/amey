var dashboard = {
    constants: {
        instanceRecordTemplate: '<tr><td><input class="expand" type="button" value="+"  data-id="{{Departmentid}}" /></td><td>{{DepartmentName}}</td><td>{{ElectronicFileCreated}}</td><td>{{ElectronicFilePending}}</td><td>{{ElectronicFileClosed}}</td><td>{{PhysicalFileCreated}}</td><td>{{PhysicalFilePending}}</td><td>{{PhysicalFileClosed}}</td><td>{{ElectronicReceiptCreated}}</td><td>{{PhysicalReceiptCreated}}</td></tr>',
        departmentRecordTemplate: '<tr style="background-color: cadetblue;"><td></td><td>{{DepartmentName}}</td><td>{{ElectronicFileCreated}}</td><td>{{ElectronicFilePending}}</td><td>{{ElectronicFileClosed}}</td><td>{{PhysicalFileCreated}}</td><td>{{PhysicalFilePending}}</td><td>{{PhysicalFileClosed}}</td><td>{{ElectronicReceiptCreated}}</td><td>{{PhysicalReceiptCreated}}</td></tr>'
    },
    getDashboardData: function () {
        $.ajax({
            type: "GET",
            url: "https://localhost:44362/Home/GetData",
            success: function (response) {
                console.log('response--------');
                console.log(response);
                $.each(response, function (i, x) {
                    console.log(x);
                    x.display = "block";
                    var compiledTemplate = Handlebars.compile(dashboard.constants.instanceRecordTemplate);
                    $('#dashboardBody').append(compiledTemplate(x));
                });
            }
        });
    },
    getInstanceData: function (instanceId) {
        $.ajax({
            type: "GET",
            url: "https://localhost:44362/Home/GetData?type=Department",
            success: function (response) {
                console.log('response--------');
                console.log(response);
                $.each(response, function (i, x) {
                    console.log(x);
                    x.display = "block";
                    var compiledTemplate = Handlebars.compile(dashboard.constants.departmentRecordTemplate);
                    var html = compiledTemplate(x);
                    $('#dashboardBody').append(html);
                });
            }
        });
    }
}