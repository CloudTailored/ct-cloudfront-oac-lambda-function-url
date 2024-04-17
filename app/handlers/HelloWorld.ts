import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";

class HelloWorld {
	public async handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
		return {
			statusCode: 200,
			body: JSON.stringify({
				message: "Hello World",
			}),
		};

	}
}

export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
	return await new HelloWorld().handler(event);
}
