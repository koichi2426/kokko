import { NextRequest, NextResponse } from 'next/server';
import { GeneratePoemAction } from '@/app/backend/adapter/api/action/generate-poem';
import { NewGeneratePoemInteractor } from '@/app/backend/usecase/GeneratePoem';
import { ChatGptPoet } from '@/app/backend/infrastructure/poet/ChatGptPoet';
import { DefaultPoemPresenter } from '@/app/backend/adapter/presenter/GeneratePoemPresenter';
import { Environment } from '@/app/backend/domain/environment';

// POSTリクエストを受け取り、詩を生成して返す
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const environment: Environment = {
      location: body.location,
      temperature: parseFloat(body.temperature),
      humidity: parseFloat(body.humidity),
      weather: body.weather,
      time: new Date(body.time),
    };

    const usecase = NewGeneratePoemInteractor(
      new ChatGptPoet(),
      new DefaultPoemPresenter()
    );

    const action = new GeneratePoemAction(usecase);
    const result = await action.execute({ environment });

    return NextResponse.json(result.data, { status: result.status });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid input or server error' },
      { status: 500 }
    );
  }
}
