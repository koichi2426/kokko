import { GeneratePoemPresenter, GeneratePoemOutput } from '@/app/backend/usecase/GeneratePoem';
import { Poem } from '@/app/backend/domain/poem';

export class DefaultPoemPresenter implements GeneratePoemPresenter {
  output(poem: Poem): GeneratePoemOutput {
    return {
      text: poem.format(), // ✅ format() は Poem.tsx で定義済み
    };
  }
}
