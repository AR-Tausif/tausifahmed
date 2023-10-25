
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";

export default function ProcessCard({dproc}) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p>{"(01)"}</p>
          <p className="text-2xl text-purple-500 font-semibold uppercase">{dproc.title}</p>
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
