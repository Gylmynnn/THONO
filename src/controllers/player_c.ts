import { Context } from "hono";

import prisma from "../lib/prisma";
import { ResType } from "../lib/types";

export async function getPlayer(c: Context) {
  try {
    const response = await prisma.player.findMany({
      orderBy: { id: "desc" },
    });

    return c.json<ResType>(
      {
        success: true,
        message: "succesfully",
        data: response,
      },
      200,
    );
  } catch (e: unknown) {
    console.log(e);
  }
}

export async function getPlayerById(c: Context) {
  const id = c.req.param("id") as string;
  try {
    const response = await prisma.player.findUnique({
      where: {
        id,
      },
    });

    return c.json<ResType>(
      {
        success: true,
        message: "succesfully",
        data: response,
      },
      200,
    );
  } catch (e: unknown) {
    console.log(e);
  }
}

export async function postPlayer(c: Context) {
  const body = await c.req.json();

  const { nickname, level, job, bio, image } = body;

  try {
    const response = await prisma.player.create({
      data: {
        level,
        job,
        nickname,
        image,
        bio,
      },
    });

    return c.json<ResType>(
      {
        success: true,
        message: "succesfully",
        data: response,
      },
      201,
    );
  } catch (e: unknown) {
    console.log(e);
  }
}

export async function putPlayer(c: Context) {
  const body = await c.req.json();
  const id = c.req.param("id") as string;

  const { nickname, level, job, bio, image } = body;

  try {
    const response = await prisma.player.update({
      where: {
        id,
      },
      data: {
        level,
        job,
        nickname,
        image,
        bio,
      },
    });

    return c.json<ResType>(
      {
        success: true,
        message: "succesfully",
        data: response,
      },
      201,
    );
  } catch (e: unknown) {
    console.log(e);
  }
}

export async function deletePlayer(c: Context) {
  const id = c.req.query("id") as string;

  try {
    const response = await prisma.player.delete({
      where: {
        id,
      },
    });

    return c.json<ResType>(
      {
        success: true,
        message: "succesfully",
        data: response,
      },
      201,
    );
  } catch (e: unknown) {
    console.log(e);
  }
}
