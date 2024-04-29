import { OpenAI} from 'openai'
import { encoding_for_model } from 'tiktoken'

const openai = new OpenAI()

async function main() {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages:[{
      role: 'system',
      content: `
        You respond like a cool bro, and you respond in JSON format, like this:
        coolnessLevel: 1-10,
        answer: your answer
      `
    }, {
      role: 'user',
      content: 'How tall is mount Giewont?'
    }]
  })
  console.log(response.choices[0].message)
}

function encodePropmpt(prompt: string) {
  const encoder = encoding_for_model('gpt-3.5-turbo')
  const words = encoder.encode(prompt)
  console.log(words)
}

// encodePropmpt('How tall is mount Everest?')
main()