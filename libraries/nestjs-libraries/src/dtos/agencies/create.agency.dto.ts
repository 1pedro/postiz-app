import { ArrayMaxSize, ArrayMinSize, IsDefined, IsOptional, IsString, IsUrl, MinLength, ValidateIf } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAgencyLogoDto {
  @IsString()
  @IsDefined()
  id: string;

  path: string;
}
export class CreateAgencyDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsUrl()
  @IsDefined()
  website: string;

  @IsUrl()
  @ValidateIf((o) => o.facebook)
  facebook: string;

  @IsString()
  @IsOptional()
  instagram: string;

  @IsString()
  @IsOptional()
  twitter: string;

  @IsUrl()
  @ValidateIf((o) => o.linkedIn)
  linkedIn: string;

  @IsUrl()
  @ValidateIf((o) => o.youtube)
  youtube: string;

  @IsString()
  @IsOptional()
  tiktok: string;

  @Type(() => CreateAgencyLogoDto)
  logo: CreateAgencyLogoDto;

  @IsString()
  shortDescription: string;

  @IsString()
  description: string;

  @IsString({
    each: true
  })
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  niches: string[];
}