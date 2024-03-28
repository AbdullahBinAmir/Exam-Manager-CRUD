const controller = require("../controllers/exam.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.post("/api/exam/add", controller.addExam);

  app.get("/api/exam/get", controller.getAllExams);

  app.get("/api/exam/get/:id", controller.getExamById);

  app.put("/api/exam/update/:id", controller.updateExam);

  app.delete("/api/exam/delete/:id", controller.deleteExam);
};
