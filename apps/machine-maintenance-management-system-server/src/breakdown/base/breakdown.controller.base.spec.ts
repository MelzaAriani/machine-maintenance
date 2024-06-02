import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { BreakdownController } from "../breakdown.controller";
import { BreakdownService } from "../breakdown.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  breakdownDate: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  reporter: "exampleReporter",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  breakdownDate: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  reporter: "exampleReporter",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    breakdownDate: new Date(),
    createdAt: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    reporter: "exampleReporter",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  breakdownDate: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  reporter: "exampleReporter",
  updatedAt: new Date(),
};

const service = {
  createBreakdown() {
    return CREATE_RESULT;
  },
  breakdowns: () => FIND_MANY_RESULT,
  breakdown: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Breakdown", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BreakdownService,
          useValue: service,
        },
      ],
      controllers: [BreakdownController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /breakdowns", async () => {
    await request(app.getHttpServer())
      .post("/breakdowns")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        breakdownDate: CREATE_RESULT.breakdownDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /breakdowns", async () => {
    await request(app.getHttpServer())
      .get("/breakdowns")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          breakdownDate: FIND_MANY_RESULT[0].breakdownDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /breakdowns/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/breakdowns"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /breakdowns/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/breakdowns"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        breakdownDate: FIND_ONE_RESULT.breakdownDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /breakdowns existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/breakdowns")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        breakdownDate: CREATE_RESULT.breakdownDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/breakdowns")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
