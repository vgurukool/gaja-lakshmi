import os
import json
from pathlib import Path
from fastapi import FastAPI, HTTPException, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

from db import (
    init_db, get_state, save_role, delete_role, save_accolade, delete_accolade
)

init_db()

app = FastAPI(
    title="Gaja Lakshmi — Sovereignty, Executive Leadership & Royal Influence API",
    description="Python FastAPI High-Performance Backend for Gaja Lakshmi Executive Command, Honors & Social Capital",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = Path(__file__).resolve().parent.parent
DIST_DIR = BASE_DIR / "dist"

@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "Gaja Lakshmi Sovereignty & Royal Leadership Platform",
        "framework": "FastAPI",
        "port": 3004
    }

@app.get("/api/state")
def api_get_state():
    try:
        return get_state()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Leadership Roles Endpoints
@app.post("/api/roles")
async def api_save_role(request: Request):
    try:
        data = await request.json()
        saved = save_role(data)
        return {"success": True, "role": saved}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.delete("/api/roles/{role_id}")
def api_delete_role(role_id: str):
    try:
        deleted = delete_role(role_id)
        if not deleted:
            raise HTTPException(status_code=404, detail="Role not found")
        return {"success": True, "deletedId": role_id}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Accolades Endpoints
@app.post("/api/accolades")
async def api_save_accolade(request: Request):
    try:
        data = await request.json()
        saved = save_accolade(data)
        return {"success": True, "accolade": saved}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.delete("/api/accolades/{accolade_id}")
def api_delete_accolade(accolade_id: str):
    try:
        deleted = delete_accolade(accolade_id)
        if not deleted:
            raise HTTPException(status_code=404, detail="Accolade not found")
        return {"success": True, "deletedId": accolade_id}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# AI Statecraft & Leadership Advisor (Gaja Niti)
@app.post("/api/chat")
async def api_statecraft_chat(request: Request):
    try:
        body = await request.json()
        query = body.get("message", "").strip().lower()
        if not query:
            raise HTTPException(status_code=400, detail="Query message is required")

        state = get_state()
        roles = state.get("leadershipRoles") or []
        metrics = state.get("metrics") or {}

        if "leadership" in query or "chanakya" in query or "niti" in query or "rajya" in query:
            reply = (
                "👑 **Rāja Dharma & Executive Governance (Gaja Niti)**:\n\n"
                "• **The Elephant's Gait (*Gaja Gati*)**: A true sovereign walks with unhurried dignity, unperturbed by minor turbulence.\n"
                "• **Prabhutva (Command through Respect)**: Authority is maintained through competence and benevolence, not tyranny.\n"
                "• **The 3 Essentials of Chanakya Niti**:\n"
                "  1. *Utsaha Shakti* (Dynamic Vision & Initiative)\n"
                "  2. *Prabhu Shakti* (Executive Resources & Capital)\n"
                "  3. *Mantra Shakti* (Strategic Counsel & Wisdom)"
            )
        elif "reputation" in query or "honor" in query or "yashas" in query:
            reply = (
                "🏆 **Yashas & Social Capital (*Kirti*)**:\n\n"
                "Gaja Lakshmi bestows the wealth that coins cannot buy: **unimpeachable credibility and peer respect**.\n"
                f"You have recorded **{metrics.get('totalAccolades', 0)} major industry accolades** and command a team of **{metrics.get('totalTeamCommanded', 0)} professionals**."
            )
        elif "philanthropy" in query or "protect" in query or "kshema" in query:
            reply = (
                "🐘 **Protective Magnanimity (*Kshema & Udāratva*)**:\n\n"
                f"Your leadership touches **{metrics.get('totalBeneficiaries', 0):,} beneficiaries** with **${metrics.get('totalPhilanthropyAmount', 0):,} in community endowments**.\n\n"
                "• **Vedic Maxim**: Just as a royal tusker protects the entire forest herd, a true leader uses their wealth and power to shelter and uplift others."
            )
        else:
            reply = (
                "🐘 **Gaja Lakshmi Royal Executive Advisor**:\n\n"
                f"Your current **Sovereignty Index is {metrics.get('sovereigntyIndex', 91)}/100** across **{metrics.get('activeRolesCount', 0)} active leadership positions**, **{metrics.get('totalAccolades', 0)} accolades**, and **{metrics.get('totalTeamCommanded', 0)} team members**.\n\n"
                "You can ask me questions such as:\n"
                "- *\"What are the core principles of Gaja Niti and executive composure?\"*\n"
                "- *\"How do I structure long-term board governance and strategic vision?\"*\n"
                "- *\"Explain the relationship between executive power and philanthropy (Kshema)\"*\n"
                "- *\"How do I build lasting social capital and reputation (Yashas)?\"* "
            )

        return {"response": reply, "source": "gaja-lakshmi-statecraft-engine"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if (DIST_DIR / "assets").exists():
    app.mount("/assets", StaticFiles(directory=str(DIST_DIR / "assets")), name="assets")

@app.get("/{full_path:path}")
def serve_spa(full_path: str):
    target_file = DIST_DIR / full_path
    if full_path and target_file.is_file():
        return FileResponse(target_file)
    index_file = DIST_DIR / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    return {"message": "Gaja Lakshmi FastAPI backend running on port 3004."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=3004, reload=False)
