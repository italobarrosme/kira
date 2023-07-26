export const getResponseChat = async (content: string) => {
  console.log('content', content)
  const response = await fetch('api/chatbot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messages: [
        {
          role: 'user',
          content
        }
      ]
    })
  }).then((res) => res.json())

  return response
}
