"""001_initial_migration

Revision ID: 8ed1227aa056
Revises: 
Create Date: 2022-02-18 07:59:51.899662

"""
from datetime import datetime
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8ed1227aa056'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    now = datetime.now()

    user_table = op.create_table(
        "user",
        sa.Column("userId", sa.Integer, primary_key=True),
        sa.Column("username", sa.String(255), nullable=False, unique=True),
        sa.Column("password", sa.String(255), nullable=False),
        sa.Column("resetRequired", sa.Boolean, nullable=False),
        sa.Column("created", sa.DateTime, nullable=False),
        sa.Column("modified", sa.DateTime, nullable=False),
        sa.Column("isDeleted", sa.Boolean, nullable=False)
    )

    op.bulk_insert(
        user_table,
        [
            { 
                "username": "Administrator", 
                "password": "Admin1234", 
                "resetRequired": True,
                "created": now,
                "modified": now,
                "isDeleted": False
            }
        ]
    )

def downgrade():
    op.drop_table("user")
