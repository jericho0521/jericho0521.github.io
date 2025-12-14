# NeuroRhythm+ Milestone 3: Usability Testing
## Milestone 3c & 3d Combined Report

---

## Milestone 3c: Usability Testing Check-In

### Usability Test 1

**Participant:** A medical doctor experienced with Parkinson's patients

**Environment:** Through Online Images

**Test Protocol:** The participant was given the prototype in a slideshow format where each button they wish to trigger will show the intended pages. The participant was given 5 minutes to navigate the website with the cognitive ability of Parkinson's patients in mind.

**Team Roles:**
- **Facilitator & Observer:** Lim Jou Ni
- **Observer & Recorder:** Ng Kar Yee Serene

#### Observations:

**Positive Findings:**
- The participant found that system status message helpful in indicating any error encountered
- The participant found the information on the statistics page helpful

**Issues Identified:**
- The participant expressed a need for **easy log-in**
- Participant also expressed that there should be a **redo function** to toggle the most recent change and avoid forcing the users to repeat the full calibration process to undo a step

#### Reworked Pages

*[Note: Original document indicated reworked pages were included but content not extracted from docx]*

---

## Milestone 3d: Usability Test Task Table

### Usability Test 2

**Participant:** A 65-year-old retired musician with mild hand tremors

**Environment:** Participant's home study

**Test Protocol:** The participant was given the prototype in a slideshow format where tapping on the piano keys or menu buttons would reveal the next interface state. The participant was given 10 minutes to complete the "Hand Calibration" task with the physical motor limitations of a tremor patient in mind.

**Team Roles:**
- **Facilitator, Observer & Recorder:** Carlos Chai Wen Yu

#### Observations:

**Positive Findings:**
- The participant immediately recognized the piano layout on the calibration screen, praising it as **"natural and logical"**
- The participant was pleasant to see a **"Help" microphone function** without prompting, noting that speaking was much easier than typing

---

### Usability Test 3

**Participant:** A licensed pharmacist with 8 years of experience managing medication regimens for Parkinson's disease patients

**Environment:** Testing Through Online Platform

**Test Protocol:** The participant was given the prototype in a clickable format where each button they wish to trigger will show the intended pages. The participant was given 5 minutes to navigate the application and explore features relevant to monitoring patient tremor data and medication timing correlations.

**Team Roles:**
- **Facilitator, Observer & Recorder:** Lam Shai Yhong

#### Observations:

**Positive Findings:**
- The participant found the **data statistics page useful** for identifying patterns between tremor activity and medication dosing times
- The participant expressed satisfaction with the **intuitive layout** of the tremor analysis interface
- Participant noted that the tremor analysis could **help determine if medication adjustments are needed**
- The participant appreciated the ability to **view detailed tremor event history** for patient consultations

---

## Discussion of Key Revisions

### 1. Implementing an Easy Log-in System (Severity 4)

#### Why it was significant:
The doctor's feedback confirmed that for the core user group (Parkinson's patients), requiring standard text-based log-in is a significant accessibility barrier. This is a critical point of failure where a user might abandon the app before even starting the therapeutic task.

#### How it improved Ergonomic Usability / AI Explainability:
This revision directly improved **Ergonomic Usability** and **Task Efficiency (H7)**. By providing "Remember Me" and one-tap Google login, we reduce the need for error-prone, small-motor text input (typing email/password) to a single, stable tap/click. This minimizes stress and frustration associated with the user's motor symptoms.

#### What was learned:
We learned that for users with motor challenges, standard industry conventions (like simple email/password forms) must be overridden in favour of maximal efficiency and reduced motor load, aligning the interface with the principles of **Adaptive Ergonomic Design**.

---

### 2. Adding the Redo Function on Calibration (Severity 4)

#### Why it was significant:
The Calibration task (Item 2) is a core step in setting up the AI's personalized feedback. The lack of a Redo option meant that if a user accidentally undid a correct step, or made an error and then undid it, they were forced into a time-consuming, repetitive process.

#### How it improved Ergonomic Usability / AI Explainability:
This revision significantly improved **User Control and Freedom (H3)** and **Task Efficiency**. For a user with fatigue/tremors, repeating the full calibration process is an unnecessary physical and cognitive strain. The Redo button provides an efficient emergency exit from accidental changes, enhancing the user's sense of control over the AI-driven personalization process.

#### What was learned:
We learned that user confidence and trust in the AI's settings (the calibration process) are maintained when they feel they have complete, efficient control over the input steps. This is crucial for an AI system where user input directly dictates the personalized recommendations.

---

## Summary of Usability Testing Results

### Test Participants Overview

| Test | Participant Type | Environment | Duration | Facilitator |
|------|-----------------|-------------|----------|-------------|
| Test 1 | Medical doctor (Parkinson's experience) | Online Images | 5 minutes | Lim Jou Ni |
| Test 2 | 65-year-old retired musician (mild tremors) | Home study | 10 minutes | Carlos Chai Wen Yu |
| Test 3 | Licensed pharmacist (8 years experience) | Online Platform | 5 minutes | Lam Shai Yhong |

### Key Positive Findings

1. **System Status Messages** - Helpful for error indication
2. **Statistics Page** - Useful information display
3. **Piano Layout** - Natural and logical interface
4. **Voice Help Function** - Easier than typing for users
5. **Tremor Analysis Interface** - Intuitive layout
6. **Medication Correlation Data** - Useful for clinical decisions
7. **Event History** - Valuable for consultations

### Critical Issues Identified (Severity 4)

1. **Login Accessibility** - Need for easy, reduced-motor-load login
2. **Calibration Control** - Need for redo function to prevent frustration

### Design Improvements Implemented

1. **Easy Login System**
   - "Remember Me" functionality
   - One-tap Google login
   - Reduced text input requirements

2. **Redo Function in Calibration**
   - Efficient error correction
   - Prevents full process repetition
   - Enhances user control and confidence

### Heuristic Principles Addressed

- **H3:** User Control and Freedom
- **H7:** Task Efficiency
- **Adaptive Ergonomic Design:** Interface aligned with motor limitations
- **AI Transparency:** User control over personalization inputs
