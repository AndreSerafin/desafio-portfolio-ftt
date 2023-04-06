-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "about_project" TEXT,
ALTER COLUMN "project_description" DROP NOT NULL;
