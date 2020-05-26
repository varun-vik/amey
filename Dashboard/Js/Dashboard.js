var dashboard = {
    constants: {
        instanceRecordTemplate: '<tr><td><input class="expand" type="button" value="+" data-subdomain="{{SubDomain}}" data-id="{{Departmentid}}" /></td><td>{{DepartmentName}}</td><td>{{ElectronicFileCreated}}</td><td>{{ElectronicFilePending}}</td><td>{{ElectronicFileClosed}}</td><td>{{PhysicalFileCreated}}</td><td>{{PhysicalFilePending}}</td><td>{{PhysicalFileClosed}}</td><td>{{ElectronicReceiptCreated}}</td><td>{{PhysicalReceiptCreated}}</td></tr>',
        departmentRecordTemplate: '<tr style="background-color: cadetblue;"><td></td><td>{{DepartmentName}}</td><td>{{ElectronicFileCreated}}</td><td>{{ElectronicFilePending}}</td><td>{{ElectronicFileClosed}}</td><td>{{PhysicalFileCreated}}</td><td>{{PhysicalFilePending}}</td><td>{{PhysicalFileClosed}}</td><td>{{ElectronicReceiptCreated}}</td><td>{{PhysicalReceiptCreated}}</td></tr>'
    },
    getDashboardData: function () {
        var table = $('#dashboardTable').DataTable({
            'ajax': 'https://localhost:44362/Home/GetData',
            'columns': [
                {
                    'className': 'details-control',
                    'orderable': false,
                    'data': null,
                    'defaultContent': ''
                },
                { 'data': 'DepartmentName' },
                { 'data': 'ElectronicFileCreated' },
                { 'data': 'ElectronicFilePending' },
                { 'data': 'ElectronicFileClosed' },
                { 'data': 'PhysicalFileCreated' },
                { 'data': 'PhysicalFilePending' },
                { 'data': 'PhysicalFileClosed' },
                { 'data': 'ElectronicReceiptCreated' },
                { 'data': 'PhysicalReceiptCreated' }
            ],
            'order': [[1, 'asc']]
        });

        $('#dashboardTable tbody').on('click', 'td.details-control', function () {

            var tr = $(this).closest('tr');
            var row = table.row(tr);

            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            } else {
                // Open this row
                $.ajax({
                    type: "GET",
                    url: "https://localhost:44362/Home/GetInstanceData?type=Department&subdomain=" + row.data().SubDomain,
                    success: function (response) {
                        var tableRows = '';
                        $.each(response, function (i, x) {
                            x.display = "block";
                            var compiledTemplate = Handlebars.compile(dashboard.constants.departmentRecordTemplate);
                            var html = compiledTemplate(x);
                            tableRows = tableRows + html;
                            //$('input.expand[data-subdomain="' + subdomain + '"]').parent().parent().after(html);
                        });

                        var html = '<table id="dashboardTableDept" class="display">' +
                            '<thead>' +
                                '<tr style="font-weight:700;font-size:large">' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td>eFiles Created</td>' +
                                    '<td>eFiles (Active)	</td>' +
                                    '<td>eFiles (Closed)</td>' +
                                    '<td>pFiles Created</td>' +
                                    '<td>pFiles (Active)</td>' +
                                    '<td>pFiles (Closed)</td>' +
                                    '<td>eReceipt Created</td>' +
                                    '<td>pReceipt Created</td>' +
                                '</tr>' +
                            '</thead>' +
                            '<tbody id = "dashboardBody" > ' + tableRows +
                            '</tbody > ' +
                        '</table > ';
                        row.child(html).show();
                        tr.addClass('shown');
                    }
                });
            }
        });
    },
    getInstanceData: function (instanceId, subdomain) {
        $.ajax({
            type: "GET",
            url: "https://localhost:44362/Home/GetInstanceData?type=Department&subdomain=" + subdomain,
            success: function (response) {

                //$.each(response, function (i, x) {
                //    x.display = "block";
                //    var compiledTemplate = Handlebars.compile(dashboard.constants.departmentRecordTemplate);
                //    var html = compiledTemplate(x);
                //    debugger;
                //    $('input.expand[data-subdomain="' + subdomain + '"]').parent().parent().after(html);
                //});
                //$('input.expand[data-subdomain="' + subdomain + '"]').val('-');
                //$('input.expand[data-subdomain="' + subdomain + '"]').data('loaded', 'true');
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