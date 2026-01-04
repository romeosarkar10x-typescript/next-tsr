type RouteObjectType<
    ReqPathParamsParserFnReturn,
    ReqPathParamsValidatorFnReturn,
    ReqSearchParamsParserFnReturn,
    ReqSearchParamsValidatorFnReturn,
    ReqSessionValidatorFnReturn,
    ReqBodyParserFnReturn,
    ReqBodyValidatorFnReturn,
    ReqHandlerFnReturn,
> = ObjectIfNotNever<
    "reqPathParams",
    ReqPathParamsValidatorFnReturn,
    {
        parserFn: ({ req }: { req: Request }) => ReqPathParamsParserFnReturn;
        validatorFn: ({
            req,
            reqPathParamsParsed,
        }: {
            req: Request;
            reqPathParamsParsed: ReqPathParamsParserFnReturn;
        }) => ReqPathParamsValidatorFnReturn;
    }
> &
    ObjectIfNotNever<
        "reqSearchParams",
        ReqSearchParamsValidatorFnReturn,
        {
            parserFn: ({
                req,
            }: {
                req: Request;
            }) => ReqSearchParamsParserFnReturn;
            validatorFn: ({
                req,
                reqSearchParamsParsed,
            }: {
                req: Request;
                reqSearchParamsParsed: ReqSearchParamsParserFnReturn;
            }) => ReqSearchParamsValidatorFnReturn;
        }
    > &
    ObjectIfNotNever<
        "reqBody",
        ReqBodyValidatorFnReturn,
        {
            parserFn: ({ req }: { req: Request }) => ReqBodyParserFnReturn;
            validatorFn: ({
                req,
                parsed,
            }: {
                req: Request;
                parsed: ReqBodyParserFnReturn;
            }) => ReqBodyValidatorFnReturn;
        }
    > &
    ObjectIfNotNever<
        "reqSession",
        ReqSessionValidatorFnReturn,
        {
            validatorFn: ({
                req,
            }: {
                req: Request;
            }) => ReqSessionValidatorFnReturn;
        }
    > &
    ObjectIfNotNever<
        "reqHandlerFn",
        ReqHandlerFnReturn,
        ({ req }: { req: Request }) => ReqHandlerFnReturn
    >;

type ObjectIfNotNever<
    KeyLiteral extends string,
    Check,
    Value = Check,
> = string extends KeyLiteral
    ? never
    : [Check] extends [never]
      ? {}
      : Record<KeyLiteral, Value>;

type ReqPathParamsParserParam0Type = Prettify<{ req: Request }>;

type ReqPathParamsValidatorParam0Type<ReqPathParamsParserFnReturn> = Prettify<
    ReqPathParamsParserParam0Type &
        ObjectIfNotNever<"reqPathParamsParsed", ReqPathParamsParserFnReturn>
>;

type ReqSearchParamsParserParam0Type<ReqPathParamsValidatorFnReturn> = Prettify<
    ReqPathParamsParserParam0Type &
        ObjectIfNotNever<
            "reqPathParamsValidated",
            ReqPathParamsValidatorFnReturn
        >
>;

type ReqSearchParamsValidatorParam0Type<
    ReqPathParamsValidatorFnReturn,
    ReqSearchParamsParserFnReturn,
> = Prettify<
    ObjectIfNotNever<"reqPathParamsParsed", ReqSearchParamsParserFnReturn> &
        ReqSearchParamsParserParam0Type<ReqPathParamsValidatorFnReturn>
>;

type ReqSessionValidatorParam0Type<
    ReqPathParamsValidatorFnReturn,
    ReqSearchParamsValidatorFnReturn,
> = Prettify<
    ReqSearchParamsParserParam0Type<ReqPathParamsValidatorFnReturn> &
        ObjectIfNotNever<
            "reqSearchParamsValidated",
            ReqSearchParamsValidatorFnReturn
        >
>;

type ReqBodyParserParam0Type<
    ReqPathParamsValidatorFnReturn,
    ReqSearchParamsValidatorFnReturn,
    ReqSessionValidatorFnReturn,
> = Prettify<
    ReqSessionValidatorParam0Type<
        ReqPathParamsValidatorFnReturn,
        ReqSearchParamsValidatorFnReturn
    > &
        ObjectIfNotNever<"reqSessionValidated", ReqSessionValidatorFnReturn>
>;

type ReqBodyValidatorParam0Type<
    ReqPathParamsValidatorFnReturn,
    ReqSearchParamsValidatorFnReturn,
    ReqSessionValidatorFnReturn,
    ReqBodyParserFnReturn,
> = Prettify<
    ReqBodyParserParam0Type<
        ReqPathParamsValidatorFnReturn,
        ReqSearchParamsValidatorFnReturn,
        ReqSessionValidatorFnReturn
    > &
        ObjectIfNotNever<"reqBodyParsed", ReqBodyParserFnReturn>
>;

type ReqHandlerParam0Type<
    ReqPathParamsValidatorFnReturn,
    ReqSearchParamsValidatorFnReturn,
    ReqSessionValidatorFnReturn,
    ReqBodyValidatorFnReturn,
> = Prettify<
    ReqBodyParserParam0Type<
        ReqPathParamsValidatorFnReturn,
        ReqSearchParamsValidatorFnReturn,
        ReqSessionValidatorFnReturn
    > &
        ObjectIfNotNever<"reqBodyValidated", ReqBodyValidatorFnReturn>
>;

type FnType = (...args: any[]) => unknown;
type FundamentalType =
    | number
    | string
    | boolean
    | null
    | undefined
    | symbol
    | bigint;

type TransformReturnType<T> = T;

export function routeBuilder() {
    return routeBuilderHelper<
        never,
        never,
        never,
        never,
        never,
        never,
        never,
        never
    >(
        {} as RouteObjectType<
            never,
            never,
            never,
            never,
            never,
            never,
            never,
            never
        >,
    );
}

interface RouteBuilderType<
    CurrentReqPathParamsParserFnReturn,
    CurrentReqPathParamsValidatorFnReturn,
    CurrentReqSearchParamsParserFnReturn,
    CurrentReqSearchParamsValidatorFnReturn,
    CurrentReqSessionValidatorFnReturn,
    CurrentReqBodyParserFnReturn,
    CurrentReqBodyValidatorFnReturn,
    CurrentReqHandlerFnReturn,
> {
    setReqPathParams: <
        ReqPathParamsParserFnReturn,
        ReqPathParamsValidatorFnReturn,
    >({
        parserFn,
        validatorFn,
    }: {
        parserFn: (
            o: ReqPathParamsParserParam0Type,
        ) => ReqPathParamsParserFnReturn;
        validatorFn: (
            o: ReqPathParamsValidatorParam0Type<ReqPathParamsParserFnReturn>,
        ) => ReqPathParamsValidatorFnReturn;
    }) => RouteBuilderType<
        ReqPathParamsParserFnReturn,
        ReqPathParamsValidatorFnReturn,
        CurrentReqSearchParamsParserFnReturn,
        CurrentReqSearchParamsValidatorFnReturn,
        CurrentReqSessionValidatorFnReturn,
        CurrentReqBodyParserFnReturn,
        CurrentReqBodyValidatorFnReturn,
        CurrentReqHandlerFnReturn
    >;

    setReqSearchParams: <
        ReqSearchParamsParserFnReturn,
        ReqSearchParamsValidatorFnReturn,
    >({
        parserFn,
        validatorFn,
    }: {
        parserFn: (
            o: ReqSearchParamsParserParam0Type<CurrentReqPathParamsValidatorFnReturn>,
        ) => ReqSearchParamsParserFnReturn;
        validatorFn: (
            o: ReqSearchParamsValidatorParam0Type<
                CurrentReqPathParamsValidatorFnReturn,
                ReqSearchParamsParserFnReturn
            >,
        ) => ReqSearchParamsValidatorFnReturn;
    }) => RouteBuilderSetFnReturnType<
        CurrentReqPathParamsParserFnReturn,
        CurrentReqPathParamsValidatorFnReturn,
        ReqSearchParamsParserFnReturn,
        ReqSearchParamsValidatorFnReturn,
        CurrentReqSessionValidatorFnReturn,
        CurrentReqBodyParserFnReturn,
        CurrentReqBodyValidatorFnReturn,
        CurrentReqHandlerFnReturn
    >;

    setReqSession: <ReqSessionValidatorFnReturn>({
        validatorFn,
    }: {
        validatorFn: (
            o: ReqSessionValidatorParam0Type<
                CurrentReqPathParamsValidatorFnReturn,
                CurrentReqPathParamsValidatorFnReturn
            >,
        ) => ReqSessionValidatorFnReturn;
    }) => RouteBuilderSetFnReturnType<
        CurrentReqPathParamsParserFnReturn,
        CurrentReqPathParamsValidatorFnReturn,
        CurrentReqSearchParamsParserFnReturn,
        CurrentReqSearchParamsValidatorFnReturn,
        ReqSessionValidatorFnReturn,
        CurrentReqBodyParserFnReturn,
        CurrentReqBodyValidatorFnReturn,
        CurrentReqHandlerFnReturn
    >;

    setReqBody: <ReqBodyParserFnReturn, ReqBodyValidatorFnReturn>({
        parserFn,
        validatorFn,
    }: {
        parserFn: (
            o: ReqBodyParserParam0Type<
                CurrentReqPathParamsParserFnReturn,
                CurrentReqSearchParamsValidatorFnReturn,
                CurrentReqSessionValidatorFnReturn
            >,
        ) => ReqBodyParserFnReturn;
        validatorFn: (
            o: ReqBodyValidatorParam0Type<
                CurrentReqPathParamsParserFnReturn,
                CurrentReqSearchParamsValidatorFnReturn,
                CurrentReqSessionValidatorFnReturn,
                ReqBodyParserFnReturn
            >,
        ) => ReqBodyValidatorFnReturn;
    }) => RouteBuilderSetFnReturnType<
        CurrentReqPathParamsParserFnReturn,
        CurrentReqPathParamsValidatorFnReturn,
        CurrentReqSearchParamsParserFnReturn,
        CurrentReqSearchParamsValidatorFnReturn,
        CurrentReqSessionValidatorFnReturn,
        ReqBodyParserFnReturn,
        ReqBodyValidatorFnReturn,
        CurrentReqHandlerFnReturn
    >;

    setReqHandler: <ReqHandlerFnReturn>(
        fn: (
            o: ReqHandlerParam0Type<
                CurrentReqPathParamsValidatorFnReturn,
                CurrentReqSearchParamsValidatorFnReturn,
                CurrentReqSessionValidatorFnReturn,
                CurrentReqBodyValidatorFnReturn
            >,
        ) => ReqHandlerFnReturn,
    ) => RouteBuilderSetFnReturnType<
        CurrentReqPathParamsParserFnReturn,
        CurrentReqPathParamsValidatorFnReturn,
        CurrentReqSearchParamsParserFnReturn,
        CurrentReqSearchParamsValidatorFnReturn,
        CurrentReqSessionValidatorFnReturn,
        CurrentReqBodyParserFnReturn,
        CurrentReqBodyValidatorFnReturn,
        ReqHandlerFnReturn
    >;
}

interface RouteBuilderWithBuildMethodType<
    CurrentReqPathParamsParserFnReturn,
    CurrentReqPathParamsValidatorFnReturn,
    CurrentReqSearchParamsParserFnReturn,
    CurrentReqSearchParamsValidatorFnReturn,
    CurrentReqSessionValidatorFnReturn,
    CurrentReqBodyParserFnReturn,
    CurrentReqBodyValidatorFnReturn,
    CurrentReqHandlerFnReturn,
> extends RouteBuilderType<
    CurrentReqPathParamsParserFnReturn,
    CurrentReqPathParamsValidatorFnReturn,
    CurrentReqSearchParamsParserFnReturn,
    CurrentReqSearchParamsValidatorFnReturn,
    CurrentReqSessionValidatorFnReturn,
    CurrentReqBodyParserFnReturn,
    CurrentReqBodyValidatorFnReturn,
    CurrentReqHandlerFnReturn
> {
    build: () => void;
}

type RouteBuilderSetFnReturnType<
    CurrentReqPathParamsParserFnReturn,
    CurrentReqPathParamsValidatorFnReturn,
    CurrentReqSearchParamsParserFnReturn,
    CurrentReqSearchParamsValidatorFnReturn,
    CurrentReqSessionValidatorFnReturn,
    CurrentReqBodyParserFnReturn,
    CurrentReqBodyValidatorFnReturn,
    CurrentReqHandlerFnReturn,
> = [CurrentReqHandlerFnReturn] extends [never]
    ? RouteBuilderType<
          CurrentReqPathParamsParserFnReturn,
          CurrentReqPathParamsValidatorFnReturn,
          CurrentReqSearchParamsParserFnReturn,
          CurrentReqSearchParamsValidatorFnReturn,
          CurrentReqSessionValidatorFnReturn,
          CurrentReqBodyParserFnReturn,
          CurrentReqBodyValidatorFnReturn,
          CurrentReqHandlerFnReturn
      >
    : RouteBuilderWithBuildMethodType<
          CurrentReqPathParamsParserFnReturn,
          CurrentReqPathParamsValidatorFnReturn,
          CurrentReqSearchParamsParserFnReturn,
          CurrentReqSearchParamsValidatorFnReturn,
          CurrentReqSessionValidatorFnReturn,
          CurrentReqBodyParserFnReturn,
          CurrentReqBodyValidatorFnReturn,
          CurrentReqHandlerFnReturn
      >;

function routeBuilderHelper<
    CurrentReqPathParamsParserFnReturn,
    CurrentReqPathParamsValidatorFnReturn,
    CurrentReqSearchParamsParserFnReturn,
    CurrentReqSearchParamsValidatorFnReturn,
    CurrentReqSessionValidatorFnReturn,
    CurrentReqBodyParserFnReturn,
    CurrentReqBodyValidatorFnReturn,
    CurrentReqHandlerFnReturn,
>(
    obj: RouteObjectType<
        CurrentReqPathParamsParserFnReturn,
        CurrentReqPathParamsValidatorFnReturn,
        CurrentReqSearchParamsParserFnReturn,
        CurrentReqSearchParamsValidatorFnReturn,
        CurrentReqSessionValidatorFnReturn,
        CurrentReqBodyParserFnReturn,
        CurrentReqBodyValidatorFnReturn,
        CurrentReqHandlerFnReturn
    >,
): RouteBuilderSetFnReturnType<
    CurrentReqPathParamsParserFnReturn,
    CurrentReqPathParamsValidatorFnReturn,
    CurrentReqSearchParamsParserFnReturn,
    CurrentReqSearchParamsValidatorFnReturn,
    CurrentReqSessionValidatorFnReturn,
    CurrentReqBodyParserFnReturn,
    CurrentReqBodyValidatorFnReturn,
    CurrentReqHandlerFnReturn
>;

function routeBuilderHelper<
    CurrentReqPathParamsParserFnReturn,
    CurrentReqPathParamsValidatorFnReturn,
    CurrentReqSearchParamsParserFnReturn,
    CurrentReqSearchParamsValidatorFnReturn,
    CurrentReqSessionValidatorFnReturn,
    CurrentReqBodyParserFnReturn,
    CurrentReqBodyValidatorFnReturn,
    CurrentReqHandlerFnReturn,
>(
    obj: RouteObjectType<
        CurrentReqPathParamsParserFnReturn,
        CurrentReqPathParamsValidatorFnReturn,
        CurrentReqSearchParamsParserFnReturn,
        CurrentReqSearchParamsValidatorFnReturn,
        CurrentReqSessionValidatorFnReturn,
        CurrentReqBodyParserFnReturn,
        CurrentReqBodyValidatorFnReturn,
        CurrentReqHandlerFnReturn
    >,
):
    | RouteBuilderType<
          CurrentReqPathParamsParserFnReturn,
          CurrentReqPathParamsValidatorFnReturn,
          CurrentReqSearchParamsParserFnReturn,
          CurrentReqSearchParamsValidatorFnReturn,
          CurrentReqSessionValidatorFnReturn,
          CurrentReqBodyParserFnReturn,
          CurrentReqBodyValidatorFnReturn,
          CurrentReqHandlerFnReturn
      >
    | RouteBuilderWithBuildMethodType<
          CurrentReqPathParamsParserFnReturn,
          CurrentReqPathParamsValidatorFnReturn,
          CurrentReqSearchParamsParserFnReturn,
          CurrentReqSearchParamsValidatorFnReturn,
          CurrentReqSessionValidatorFnReturn,
          CurrentReqBodyParserFnReturn,
          CurrentReqBodyValidatorFnReturn,
          CurrentReqHandlerFnReturn
      > {
    function setReqPathParams<
        ReqPathParamsParserFnReturn,
        ReqPathParamsValidatorFnReturn,
    >({
        parserFn,
        validatorFn,
    }: {
        parserFn: (
            o: ReqPathParamsParserParam0Type,
        ) => ReqPathParamsParserFnReturn;
        validatorFn: (
            o: ReqPathParamsValidatorParam0Type<ReqPathParamsParserFnReturn>,
        ) => ReqPathParamsValidatorFnReturn;
    }): RouteBuilderSetFnReturnType<
        ReqPathParamsParserFnReturn,
        ReqPathParamsValidatorFnReturn,
        CurrentReqSearchParamsParserFnReturn,
        CurrentReqSearchParamsValidatorFnReturn,
        CurrentReqSessionValidatorFnReturn,
        CurrentReqBodyParserFnReturn,
        CurrentReqBodyValidatorFnReturn,
        CurrentReqHandlerFnReturn
    > {
        return routeBuilderHelper({
            ...obj,
            reqPathParams: {
                parserFn,
                validatorFn,
            },
        } as RouteObjectType<
            ReqPathParamsParserFnReturn,
            ReqPathParamsValidatorFnReturn,
            CurrentReqSearchParamsParserFnReturn,
            CurrentReqSearchParamsValidatorFnReturn,
            CurrentReqSessionValidatorFnReturn,
            CurrentReqBodyParserFnReturn,
            CurrentReqBodyValidatorFnReturn,
            CurrentReqHandlerFnReturn
        >);
    }

    function setReqSearchParams<
        ReqSearchParamsParserFnReturn,
        ReqSearchParamsValidatorFnReturn,
    >({
        parserFn,
        validatorFn,
    }: {
        parserFn: (
            o: ReqSearchParamsParserParam0Type<CurrentReqPathParamsValidatorFnReturn>,
        ) => ReqSearchParamsParserFnReturn;
        validatorFn: (
            o: ReqSearchParamsValidatorParam0Type<
                CurrentReqPathParamsValidatorFnReturn,
                ReqSearchParamsParserFnReturn
            >,
        ) => ReqSearchParamsValidatorFnReturn;
    }): RouteBuilderSetFnReturnType<
        CurrentReqPathParamsParserFnReturn,
        CurrentReqPathParamsValidatorFnReturn,
        ReqSearchParamsParserFnReturn,
        ReqSearchParamsValidatorFnReturn,
        CurrentReqSessionValidatorFnReturn,
        CurrentReqBodyParserFnReturn,
        CurrentReqBodyValidatorFnReturn,
        CurrentReqHandlerFnReturn
    > {
        return routeBuilderHelper({
            ...obj,
            reqSearchParams: {
                parserFn,
                validatorFn,
            },
        } as RouteObjectType<
            CurrentReqPathParamsParserFnReturn,
            CurrentReqPathParamsValidatorFnReturn,
            ReqSearchParamsParserFnReturn,
            ReqSearchParamsValidatorFnReturn,
            CurrentReqSessionValidatorFnReturn,
            CurrentReqBodyParserFnReturn,
            CurrentReqBodyValidatorFnReturn,
            CurrentReqHandlerFnReturn
        >);
    }

    function setReqSession<ReqSessionValidatorFnReturn>({
        validatorFn,
    }: {
        validatorFn: (
            o: ReqSessionValidatorParam0Type<
                CurrentReqPathParamsValidatorFnReturn,
                CurrentReqPathParamsValidatorFnReturn
            >,
        ) => ReqSessionValidatorFnReturn;
    }): RouteBuilderSetFnReturnType<
        CurrentReqPathParamsParserFnReturn,
        CurrentReqPathParamsValidatorFnReturn,
        CurrentReqSearchParamsParserFnReturn,
        CurrentReqSearchParamsValidatorFnReturn,
        ReqSessionValidatorFnReturn,
        CurrentReqBodyParserFnReturn,
        CurrentReqBodyValidatorFnReturn,
        CurrentReqHandlerFnReturn
    > {
        return routeBuilderHelper({
            ...obj,
            reqSession: {
                validatorFn,
            },
        } as RouteObjectType<
            CurrentReqPathParamsParserFnReturn,
            CurrentReqPathParamsValidatorFnReturn,
            CurrentReqSearchParamsParserFnReturn,
            CurrentReqSearchParamsValidatorFnReturn,
            ReqSessionValidatorFnReturn,
            CurrentReqBodyParserFnReturn,
            CurrentReqBodyValidatorFnReturn,
            CurrentReqHandlerFnReturn
        >);
    }

    function setReqBody<ReqBodyParserFnReturn, ReqBodyValidatorFnReturn>({
        parserFn,
        validatorFn,
    }: {
        parserFn: (
            o: ReqBodyParserParam0Type<
                CurrentReqPathParamsParserFnReturn,
                CurrentReqSearchParamsValidatorFnReturn,
                CurrentReqSessionValidatorFnReturn
            >,
        ) => ReqBodyParserFnReturn;
        validatorFn: (
            o: ReqBodyValidatorParam0Type<
                CurrentReqPathParamsParserFnReturn,
                CurrentReqSearchParamsValidatorFnReturn,
                CurrentReqSessionValidatorFnReturn,
                ReqBodyParserFnReturn
            >,
        ) => ReqBodyValidatorFnReturn;
    }): RouteBuilderSetFnReturnType<
        CurrentReqPathParamsParserFnReturn,
        CurrentReqPathParamsValidatorFnReturn,
        CurrentReqSearchParamsParserFnReturn,
        CurrentReqSearchParamsValidatorFnReturn,
        CurrentReqSessionValidatorFnReturn,
        ReqBodyParserFnReturn,
        ReqBodyValidatorFnReturn,
        CurrentReqHandlerFnReturn
    > {
        return routeBuilderHelper({
            ...obj,
            reqBody: {
                parserFn,
                validatorFn,
            },
        } as RouteObjectType<
            CurrentReqPathParamsParserFnReturn,
            CurrentReqPathParamsValidatorFnReturn,
            CurrentReqSearchParamsParserFnReturn,
            CurrentReqSearchParamsValidatorFnReturn,
            CurrentReqSessionValidatorFnReturn,
            ReqBodyParserFnReturn,
            ReqBodyValidatorFnReturn,
            CurrentReqHandlerFnReturn
        >);
    }

    function setReqHandler<ReqHandlerFnReturn extends unknown>(
        fn: (
            o: ReqHandlerParam0Type<
                CurrentReqPathParamsValidatorFnReturn,
                CurrentReqSearchParamsValidatorFnReturn,
                CurrentReqSessionValidatorFnReturn,
                CurrentReqBodyValidatorFnReturn
            >,
        ) => ReqHandlerFnReturn,
    ): RouteBuilderSetFnReturnType<
        CurrentReqPathParamsParserFnReturn,
        CurrentReqPathParamsValidatorFnReturn,
        CurrentReqSearchParamsParserFnReturn,
        CurrentReqSearchParamsValidatorFnReturn,
        CurrentReqSessionValidatorFnReturn,
        CurrentReqBodyParserFnReturn,
        CurrentReqBodyValidatorFnReturn,
        ReqHandlerFnReturn
    > {
        return routeBuilderHelper({
            ...obj,
            reqHandlerFn: fn,
        } as RouteObjectType<
            CurrentReqPathParamsParserFnReturn,
            CurrentReqPathParamsValidatorFnReturn,
            CurrentReqSearchParamsParserFnReturn,
            CurrentReqSearchParamsValidatorFnReturn,
            CurrentReqSessionValidatorFnReturn,
            CurrentReqBodyParserFnReturn,
            CurrentReqBodyValidatorFnReturn,
            ReqHandlerFnReturn
        >);
    }

    function build() {
        console.log("obj: ", obj);
        console.log("Building route...");
    }

    return {
        setReqPathParams,
        setReqSearchParams,
        setReqSession,
        setReqBody,
        setReqHandler,
        build,
    };
}

type Prettify<T> = {
    [K in keyof T]: T[K] extends FundamentalType | FnType | Request
        ? T[K]
        : Prettify<T[K]>;
} & {};

const a = routeBuilder();
const b = a.setReqPathParams({
    parserFn: ({ req }: { req: Request }) => {
        return {} as number;
    },
    validatorFn: ({
        req,
        reqPathParamsParsed,
    }: {
        req: Request;
        reqPathParamsParsed: number;
    }) => {
        return {} as 1;
    },
});

const c = b.setReqPathParams({
    parserFn: ({ req }: { req: Request }) => {
        return {} as boolean;
    },
    validatorFn: ({
        req,
        reqPathParamsParsed,
    }: {
        req: Request;
        reqPathParamsParsed: boolean;
    }) => {
        return {} as true;
    },
});

const d = c.setReqSearchParams({
    parserFn: ({ req }: { req: Request }) => {
        return {} as "Hello";
    },
    validatorFn: ({ req }: { req: Request }) => {
        return {} as "X";
    },
});

const e = d.setReqSession({
    validatorFn: ({}) => {
        return { id: 1, payload: { a: 0, b: "string", c: false } };
    },
});

const f = e.setReqHandler(() => {
    return false;
});

const route = f.build();
