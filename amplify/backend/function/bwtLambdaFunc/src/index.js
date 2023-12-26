

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const userId = event.pathParameters.userId; // /user/1001
    const user = {'userId' : userId, 'userName' : "User-" + userId};
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      },
        body: JSON.stringify(user),
    };
};
