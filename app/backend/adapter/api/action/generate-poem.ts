import { GeneratePoemUseCase, GeneratePoemInput, GeneratePoemOutput } from '@/app/backend/usecase/GeneratePoem';

export class GeneratePoemAction {
  constructor(private readonly uc: GeneratePoemUseCase) {}

  async execute(input: GeneratePoemInput): Promise<{
    status: number;
    data: GeneratePoemOutput | { error: string };
  }> {
    try {
      const result = await this.uc.execute(input);
      return {
        status: 201,
        data: result,
      };
    } catch (error) {
      return {
        status: 500,
        data: { error: 'Failed to generate poem' },
      };
    }
  }
}
