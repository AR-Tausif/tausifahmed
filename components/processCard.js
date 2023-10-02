"use client"
import React from "react";

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function ProcessCard({dproc}) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={30}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={30}
        />
        <div className="flex flex-col">
          <p className="text-md">{dproc.title}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{dproc.desc}</p>
      </CardBody>
      <Divider/>
    </Card>
  );
}
