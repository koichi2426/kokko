import { Poet } from '../../domain/poet';
import { Poem } from '../../domain/poem';
import { Environment } from '../../domain/environment';

export class ChatGptPoet implements Poet {
  name = 'ChatGPT詩人';

  async composePoem(env: Environment): Promise<Poem> {
    const prompt = `以下の情報をもとに俳句を作ってください：
場所: ${env.location}
気温: ${env.temperature}℃
湿度: ${env.humidity}%
天気: ${env.weather}
時間帯: ${env.time.toLocaleTimeString('ja-JP')}
`;
    // ChatGPTなどに投げる処理を書く（ここではダミー）
    const result = `晴れ空に　汗ばむ午後の　東京風`;
    return new Poem(result);
  }
}
