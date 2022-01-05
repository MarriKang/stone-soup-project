"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
// @ts-ignore
const models_1 = __importDefault(require("./db/models"));
app.use(express_1.default.static("../client/build"));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('yeah');
});
app.get("/api/users", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield models_1.default.User.findAll());
    }
    catch (err) {
        next(err);
    }
}));
app.get("/api/projects", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield models_1.default.Project.findAll());
    }
    catch (err) {
        next(err);
    }
}));
app.get("/api/projects/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield models_1.default.Project.findByPk(req.params.id);
        res.json(project);
    }
    catch (err) {
        next(err);
    }
}));
app.delete("/api/projects/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield models_1.default.Project.findByPk(req.params.id);
        yield project.destroy();
        res.send(project);
    }
    catch (error) {
        next(error);
    }
}));
app.post("/api/projects/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(201).send(yield models_1.default.Project.create(req.body));
    }
    catch (err) {
        next(err);
    }
}));
app.put("/api/projects/:id/:data", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield models_1.default.Project.findByPk(req.params.id);
        const user = yield models_1.default.User.findByPk(3);
        res.json(yield project.addUser(user, { through: { amntPaid: req.params.data } }));
    }
    catch (error) {
        next(error);
    }
}));
app.get("/api/projects/:id/rewards", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rewards = yield models_1.default.Reward.findAll({
            where: {
                ProjectId: req.params.id
            }
        });
        res.json(rewards);
    }
    catch (err) {
        next(err);
    }
}));
app.get("/api/users/:userId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const creator = yield models_1.default.User.findByPk(req.params.userId);
        res.json(creator);
    }
    catch (err) {
        next(err);
    }
}));
models_1.default.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is connected at http://localhost/${PORT}`);
    });
});
