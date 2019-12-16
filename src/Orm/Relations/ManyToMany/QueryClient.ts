/*
 * @adonisjs/lucid
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

import { QueryClientContract } from '@ioc:Adonis/Lucid/Database'
import { ModelConstructorContract, ModelContract } from '@ioc:Adonis/Lucid/Model'
import { ManyToManyClientContract } from '@ioc:Adonis/Lucid/Relations'

import { ManyToMany } from './index'
import { ManyToManyQueryBuilder } from './QueryBuilder'

export class ManyToManyQueryClient implements ManyToManyClientContract<
ModelConstructorContract,
ModelConstructorContract
> {
  constructor (
    private models: ModelContract | ModelContract[],
    private client: QueryClientContract,
    private relation: ManyToMany,
  ) {
  }

  public query (): any {
    return new ManyToManyQueryBuilder(this.client.knexQuery(), this.models, this.client, this.relation)
  }

  public eagerQuery (): any {
    return this.query()
  }
}