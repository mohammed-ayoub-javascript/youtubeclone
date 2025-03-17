import { int, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('users_table', {
    id: int("id").autoincrement().primaryKey(), 
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    image: varchar("image", { length: 355 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});
