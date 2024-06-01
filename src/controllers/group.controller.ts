import { BaseController } from "./baseController";
import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  Res,
} from "routing-controllers";
import { Request, Response } from "express";
import Group from "../models/group.model";
import GroupService from "../services/core/group.service";
@Controller("/group")
export default class GroupController extends BaseController<GroupService> {
  constructor() {
    super(new GroupService());
  }

  @Get("/")
  async getListGroup(@Req() req: Request, @Res() res: Response) {
    try {
      const result = await this.service.getAllGroup(
        parseInt(req.body.currentUserData.id)
      );
      return res.send(result);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
  
  @Get("/:id")
  async getGroupDetail(@Req() req: Request, @Res() res: Response) {
    try {
      const groupId = req.params.id;
      const result = await this.service.getGroupDetail(parseInt(groupId));
      return res.send(result);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  @Post("/")
  async createGroup(@Req() req: Request, @Res() res: Response) {
    try {
      const group = req.body as Group;
      const userId = req.body.currentUserData.id;
      await this.service.createGroup(parseInt(userId), group);
      return res.send("Create group successfully");
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  @Delete("/:id")
  async deleteGroup(@Req() req: Request, @Res() res: Response) {
    try {
      const userId = req.body.currentUserData.id;
      const groupId = req.params.id;
      await this.service.deleteGroup(parseInt(userId), parseInt(groupId));
      return res.send("Delete group successfully");
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  @Post("/student")
  async addStudent(@Req() req: Request, @Res() res: Response) {
    try {
      const groupId = req.body.groupId;
      const emails = req.body.emails as string[];
      const group = await this.service.addStudent(parseInt(groupId), emails);
      return res.send(group);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
  @Put("/student")
  async removeStudent(@Req() req: Request, @Res() res: Response) {
    try {
      const groupId = req.body.groupId;
      const email = req.body.email as string;
      console.log(email, groupId);
      const group = await this.service.removeStudent(parseInt(groupId), email);
      return res.send(group);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  @Post("/course")
  async addCourse(@Req() req: Request, @Res() res: Response) {
    try {
      const userId = req.body.currentUserData.id;
      const groupId = req.body.groupId;
      const courseId = req.body.courseId;
      const group = await this.service.addCourseToGroup(
        parseInt(groupId),
        parseInt(userId),
        parseInt(courseId)
      );
      return res.send(group);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  @Put("/course")
  async removeCourse(@Req() req: Request, @Res() res: Response) {
    try {
      const groupId = req.body.groupId;
      const courseId = req.body.courseId;
      const courseIdDelete = await this.service.removeCourseFromGroup(
        parseInt(groupId),
        parseInt(courseId)
      );
      return res.send(courseIdDelete);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}
