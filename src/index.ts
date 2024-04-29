import { OpenAI} from 'openai'
import { encoding_for_model } from 'tiktoken'

const openai = new OpenAI()

async function main() {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages:[{
        role: 'user',
        content: 'How tall is mount Giewont?'
    }]
  })
  console.log(response.choices[0].message.content)
}

function encodePropmpt(prompt: string) {
  const encoder = encoding_for_model('gpt-3.5-turbo')
  const words = encoder.encode(prompt)
  console.log(words)
}

// encodePropmpt('How tall is mount Everest?')
main()