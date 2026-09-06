import os
import json
import sqlite3
import random
import string
from pathlib import Path
from datetime import datetime, timedelta

SERVER_DIR = Path(__file__).resolve().parent
ROOT_DIR = SERVER_DIR.parent
DATA_DIR = ROOT_DIR / "data"
DATA_DIR.mkdir(parents=True, exist_ok=True)

DB_PATH = DATA_DIR / "gaja.db"

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode = WAL")
    return conn

def init_db():
    conn = get_db()
    with conn:
        conn.executescript('''
            CREATE TABLE IF NOT EXISTS leadership_roles (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                organization TEXT NOT NULL,
                roleType TEXT NOT NULL,
                status TEXT NOT NULL DEFAULT 'Active',
                teamSize INTEGER NOT NULL DEFAULT 1,
                strategicScope TEXT NOT NULL DEFAULT '',
                keyAccomplishments TEXT NOT NULL DEFAULT '[]',
                startDate TEXT NOT NULL,
                createdAt TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS accolades (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                issuingBody TEXT NOT NULL,
                category TEXT NOT NULL,
                yearAwarded INTEGER NOT NULL,
                significance TEXT NOT NULL DEFAULT '',
                credentialUrl TEXT NOT NULL DEFAULT '',
                createdAt TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS philanthropy (
                id TEXT PRIMARY KEY,
                initiativeName TEXT NOT NULL,
                category TEXT NOT NULL,
                beneficiariesCount INTEGER NOT NULL DEFAULT 0,
                amountContributed REAL NOT NULL DEFAULT 0,
                impactSummary TEXT NOT NULL DEFAULT '',
                date TEXT NOT NULL,
                createdAt TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS sovereignty_logs (
                date TEXT PRIMARY KEY,
                sovereigntyScore INTEGER NOT NULL DEFAULT 88,
                influenceScore INTEGER NOT NULL DEFAULT 92,
                leadershipScore INTEGER NOT NULL DEFAULT 85,
                reputationScore INTEGER NOT NULL DEFAULT 90,
                notes TEXT NOT NULL DEFAULT '',
                createdAt TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS settings (
                key TEXT PRIMARY KEY,
                value TEXT NOT NULL,
                updatedAt TEXT NOT NULL
            );
        ''')
    conn.close()
    seed_initial_data_if_empty()

def seed_initial_data_if_empty():
    conn = get_db()
    cur = conn.cursor()

    # Seed leadership roles
    cur.execute("SELECT count(*) FROM leadership_roles")
    if cur.fetchone()[0] == 0:
        initial_roles = [
            ('role_1', 'Founder & Chief Technology Strategist', 'Vedic Horizons Cloud & AI', 'Executive Command', 'Active', 28, 'Guiding enterprise architecture, AI safety, and multi-year engineering roadmap.', json.dumps(['Scaled core platform to 10M+ operations/sec', 'Led cross-functional team of 28 engineers & researchers', 'Formulated 5-year sustainable tech vision']), '2022-01-15', datetime.utcnow().isoformat() + "Z"),
            ('role_2', 'Advisory Board Member', 'Global Open-Source Infrastructure Foundation', 'Board Governance', 'Active', 150, 'Governance oversight for cloud-native reference architectures and open standards.', json.dumps(['Keynote speaker on Sovereign Cloud Infrastructure', 'Advised on $5M grant allocations for developer tooling']), '2023-06-01', datetime.utcnow().isoformat() + "Z"),
            ('role_3', 'Lead Architectural Mentor', 'Next-Gen Engineering Fellowship', 'Mentorship & Stewardship', 'Active', 12, 'Mentoring junior and staff architects in resilient distributed systems.', json.dumps(['Guided 12 senior engineers to VP/Director transitions', 'Authored high-scale distributed systems playbook']), '2024-01-10', datetime.utcnow().isoformat() + "Z")
        ]
        with conn:
            for r in initial_roles:
                conn.execute('''
                    INSERT INTO leadership_roles (id, title, organization, roleType, status, teamSize, strategicScope, keyAccomplishments, startDate, createdAt)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ''', r)

    # Seed accolades
    cur.execute("SELECT count(*) FROM accolades")
    if cur.fetchone()[0] == 0:
        initial_accolades = [
            ('acc_1', 'Distinguished Cloud Architect of the Year', 'Enterprise Technology Alliance', 'Industry Leadership', 2025, 'Recognized for pioneering resilient multi-region cloud frameworks.', 'https://credentials.example.com/distinguished-architect', datetime.utcnow().isoformat() + "Z"),
            ('acc_2', 'Fellow of Open Infrastructure', 'Cloud Native Standards Body', 'Honorary Fellowship', 2024, 'Elected Fellow for foundational contributions to open engineering standards.', 'https://credentials.example.com/fellow-2024', datetime.utcnow().isoformat() + "Z"),
            ('acc_3', 'Excellence in Ethical AI & Statecraft', 'Global Leadership Council', 'Ethical Governance', 2024, 'Awarded for integrating classical ethical principles into modern decision engines.', 'https://credentials.example.com/ethical-ai-award', datetime.utcnow().isoformat() + "Z"),
            ('acc_4', 'Master Mentor & Talent Builder Award', 'Silicon Valley Tech Guild', 'Mentorship & Human Capital', 2023, 'Honored for building high-performing, compassionate engineering cultures.', 'https://credentials.example.com/master-mentor', datetime.utcnow().isoformat() + "Z")
        ]
        with conn:
            for a in initial_accolades:
                conn.execute('''
                    INSERT INTO accolades (id, title, issuingBody, category, yearAwarded, significance, credentialUrl, createdAt)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                ''', a)

    # Seed philanthropy
    cur.execute("SELECT count(*) FROM philanthropy")
    if cur.fetchone()[0] == 0:
        initial_philanthropy = [
            ('phil_1', 'Vedic Knowledge & Sanskrit Digitization Endowment', 'Cultural Heritage', 4500, 25000, 'Endowed preservation of rare palm-leaf manuscripts and open-access digitized translations.', '2025-05-10', datetime.utcnow().isoformat() + "Z"),
            ('phil_2', 'Underrepresented Tech Founders Seed Grant', 'Economic Upliftment', 35, 40000, 'Provided seed grants and direct executive mentorship to first-time founders.', '2024-11-20', datetime.utcnow().isoformat() + "Z"),
            ('phil_3', 'Rural Clean Water & Solar Micro-Grid Initiative', 'Civic Infrastructure', 1200, 18000, 'Funded solar-powered water filtration plants in three drought-prone villages.', '2024-03-15', datetime.utcnow().isoformat() + "Z")
        ]
        with conn:
            for p in initial_philanthropy:
                conn.execute('''
                    INSERT INTO philanthropy (id, initiativeName, category, beneficiariesCount, amountContributed, impactSummary, date, createdAt)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                ''', p)

    # Seed sovereignty logs
    cur.execute("SELECT count(*) FROM sovereignty_logs")
    if cur.fetchone()[0] == 0:
        for i in range(7):
            d_str = (datetime.utcnow() - timedelta(days=i)).strftime("%Y-%m-%d")
            with conn:
                conn.execute('''
                    INSERT OR REPLACE INTO sovereignty_logs (date, sovereigntyScore, influenceScore, leadershipScore, reputationScore, notes, createdAt)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                ''', (d_str, 88 + (i % 3), 92 - (i % 2), 85 + (i % 4), 90, 'Executive composure steady; leadership and governance operations optimal.', datetime.utcnow().isoformat() + "Z"))

    conn.close()

def get_state():
    conn = get_db()
    cur = conn.cursor()

    cur.execute("SELECT * FROM leadership_roles ORDER BY startDate DESC")
    roles_rows = [dict(r) for r in cur.fetchall()]
    parsed_roles = []
    for r in roles_rows:
        try:
            acc = json.loads(r.get("keyAccomplishments") or "[]")
        except Exception:
            acc = []
        parsed_roles.append({**r, "keyAccomplishments": acc})

    cur.execute("SELECT * FROM accolades ORDER BY yearAwarded DESC")
    accolades = [dict(r) for r in cur.fetchall()]

    cur.execute("SELECT * FROM philanthropy ORDER BY date DESC")
    philanthropy = [dict(r) for r in cur.fetchall()]

    cur.execute("SELECT * FROM sovereignty_logs ORDER BY date DESC LIMIT 30")
    logs = [dict(r) for r in cur.fetchall()]

    cur.execute("SELECT * FROM settings")
    settings_rows = cur.fetchall()
    settings = {}
    for r in settings_rows:
        try:
            settings[r["key"]] = json.loads(r["value"])
        except Exception:
            settings[r["key"]] = r["value"]

    conn.close()

    total_people_impacted = sum(p.get("beneficiariesCount", 0) for p in philanthropy)
    total_philanthropy_contributed = sum(p.get("amountContributed", 0) for p in philanthropy)
    total_team_members = sum(r.get("teamSize", 0) for r in parsed_roles)

    return {
        "leadershipRoles": parsed_roles,
        "accolades": accolades,
        "philanthropy": philanthropy,
        "sovereigntyLogs": logs,
        "settings": settings,
        "metrics": {
            "activeRolesCount": len([r for r in parsed_roles if r.get("status") == "Active"]),
            "totalTeamCommanded": total_team_members,
            "totalAccolades": len(accolades),
            "totalBeneficiaries": total_people_impacted,
            "totalPhilanthropyAmount": total_philanthropy_contributed,
            "sovereigntyIndex": 91
        }
    }

def save_role(r):
    conn = get_db()
    id_val = r.get("id") or f"role_{int(datetime.now().timestamp()*1000)}"
    title = str(r.get("title") or "").strip()
    org = str(r.get("organization") or "").strip()
    rtype = str(r.get("roleType") or "Executive Command").strip()
    status = str(r.get("status") or "Active").strip()
    team = int(r.get("teamSize") or 1)
    scope = str(r.get("strategicScope") or "").strip()
    acc = r.get("keyAccomplishments") if isinstance(r.get("keyAccomplishments"), list) else []
    sdate = str(r.get("startDate") or datetime.now().strftime("%Y-%m-%d"))
    created_at = r.get("createdAt") or datetime.utcnow().isoformat() + "Z"

    with conn:
        conn.execute('''
            INSERT INTO leadership_roles (id, title, organization, roleType, status, teamSize, strategicScope, keyAccomplishments, startDate, createdAt)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
                title = excluded.title,
                organization = excluded.organization,
                roleType = excluded.roleType,
                status = excluded.status,
                teamSize = excluded.teamSize,
                strategicScope = excluded.strategicScope,
                keyAccomplishments = excluded.keyAccomplishments,
                startDate = excluded.startDate
        ''', (id_val, title, org, rtype, status, team, scope, json.dumps(acc), sdate, created_at))

    cur = conn.cursor()
    cur.execute("SELECT * FROM leadership_roles WHERE id = ?", (id_val,))
    row = dict(cur.fetchone())
    conn.close()
    return {**row, "keyAccomplishments": json.loads(row.get("keyAccomplishments") or "[]")}

def delete_role(rid):
    conn = get_db()
    with conn:
        res = conn.execute("DELETE FROM leadership_roles WHERE id = ?", (rid,))
        cnt = res.rowcount
    conn.close()
    return cnt > 0

def save_accolade(a):
    conn = get_db()
    id_val = a.get("id") or f"acc_{int(datetime.now().timestamp()*1000)}"
    title = str(a.get("title") or "").strip()
    issuer = str(a.get("issuingBody") or "").strip()
    category = str(a.get("category") or "Industry Award").strip()
    year = int(a.get("yearAwarded") or datetime.now().year)
    significance = str(a.get("significance") or "").strip()
    url = str(a.get("credentialUrl") or "").strip()
    created_at = a.get("createdAt") or datetime.utcnow().isoformat() + "Z"

    with conn:
        conn.execute('''
            INSERT INTO accolades (id, title, issuingBody, category, yearAwarded, significance, credentialUrl, createdAt)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
                title = excluded.title,
                issuingBody = excluded.issuingBody,
                category = excluded.category,
                yearAwarded = excluded.yearAwarded,
                significance = excluded.significance,
                credentialUrl = excluded.credentialUrl
        ''', (id_val, title, issuer, category, year, significance, url, created_at))

    cur = conn.cursor()
    cur.execute("SELECT * FROM accolades WHERE id = ?", (id_val,))
    row = dict(cur.fetchone())
    conn.close()
    return row

def delete_accolade(aid):
    conn = get_db()
    with conn:
        res = conn.execute("DELETE FROM accolades WHERE id = ?", (aid,))
        cnt = res.rowcount
    conn.close()
    return cnt > 0
