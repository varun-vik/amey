using Dashboard.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Dashboard.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetData([FromUri]string type = "Instance")
        {
            DashboardService service = new DashboardService();
            var data = service.GetDahsboardData(type);
            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
}