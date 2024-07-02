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

  const { choices, error } = response

  return {
    choices,
    error
  }
}

export const getResponseButtonState = async (userId: string) => {
  const response = await fetch(
    `api/chatbot/button-state?userId=${userId}`
  ).then((res) => res.json())

  const { clickCount, blocked } = response

  return {
    clickCount,
    blocked
  }
}

export const postResponseButtonState = async (userId: string) => {
  const response = await fetch(`api/chatbot/button-state?userId=${userId}`, {
    method: 'POST'
  }).then((res) => res.json())

  const { clickCount, blocked } = response

  return {
    clickCount,
    blocked
  }
}
