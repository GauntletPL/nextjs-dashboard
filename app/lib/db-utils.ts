import {Pool, QueryResultRow} from 'pg';

const pool = new Pool();

export const query = <Type extends QueryResultRow>(text: string, values?: any[]) => pool.query<Type>(text, values);