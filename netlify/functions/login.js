export async function handler() {
  return {
    statusCode: 302,
    headers: {
      Location: "https://discord.com/oauth2/authorize?client_id=1462876315915915264&scope=identify%20guilds&response_type=code"
    }
  };
}
