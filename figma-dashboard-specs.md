# Dashboard Design Specifications for Figma

## Overview

This document provides comprehensive design specifications for building a dashboard layout in Figma based on your existing Next.js project with shadcn/ui components.

**Figma File:** https://www.figma.com/design/KPmmW2Xl8NigCPXKZ33QsY/testing-test

## Design System Foundation

### Colors (Based on shadcn/ui default theme)

```
Primary Colors:
- Background: #FFFFFF (Light) / #0A0A0A (Dark)
- Foreground: #0A0A0A (Light) / #FAFAFA (Dark)
- Card: #FFFFFF (Light) / #0A0A0A (Dark)
- Card Foreground: #0A0A0A (Light) / #FAFAFA (Dark)
- Popover: #FFFFFF (Light) / #0A0A0A (Dark)
- Popover Foreground: #0A0A0A (Light) / #FAFAFA (Dark)

Accent Colors:
- Primary: #171717 (Light) / #FAFAFA (Dark)
- Primary Foreground: #FAFAFA (Light) / #0A0A0A (Dark)
- Secondary: #F5F5F5 (Light) / #262626 (Dark)
- Secondary Foreground: #171717 (Light) / #FAFAFA (Dark)

Status Colors:
- Destructive: #EF4444
- Destructive Foreground: #FAFAFA
- Warning: #F59E0B
- Success: #10B981

Border & Input:
- Border: #E5E5E5 (Light) / #262626 (Dark)
- Input: #E5E5E5 (Light) / #262626 (Dark)
- Ring: #171717 (Light) / #D4D4D8 (Dark)

Chart Colors:
- Chart 1: #E11D48
- Chart 2: #0EA5E9
- Chart 3: #22C55E
- Chart 4: #F59E0B
- Chart 5: #8B5CF6
```

### Typography

```
Font Family: Inter (system-ui fallback)

Headings:
- H1: 36px, font-weight: 800, line-height: 1.2
- H2: 30px, font-weight: 700, line-height: 1.3
- H3: 24px, font-weight: 600, line-height: 1.4
- H4: 20px, font-weight: 600, line-height: 1.5

Body Text:
- Large: 18px, font-weight: 400, line-height: 1.6
- Default: 16px, font-weight: 400, line-height: 1.5
- Small: 14px, font-weight: 400, line-height: 1.4
- Muted: 14px, font-weight: 400, line-height: 1.4, opacity: 0.7
```

### Spacing System

```
Base Unit: 4px

Spacing Scale:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
```

## Dashboard Layout Structure

### Canvas Setup

- **Dimensions:** 1440px width × 1024px height (Desktop)
- **Background:** Use background color from color system

### 1. Header Component

**Dimensions:** 1440px × 64px
**Position:** Top of canvas

```
Elements:
- Logo/Brand (Left): 24px from left edge
- Page Title: "Dashboard" (H3 typography)
- User Avatar + Dropdown (Right): 24px from right edge
- Background: Card color
- Border Bottom: 1px, Border color
```

### 2. Sidebar Component

**Dimensions:** 280px × 960px (Expanded) / 64px × 960px (Collapsed)
**Position:** Left side, below header

```
Structure:
- Sidebar Header (280px × 64px):
  - Collapse/Expand toggle button
  - Background: Card color

- Navigation Menu (280px × remaining height):
  - Menu Items (280px × 48px each):
    - Icon (24px × 24px) + Text
    - Hover state: Secondary color background
    - Active state: Primary color background
    - 16px padding horizontal, 12px vertical

- Menu Categories:
  □ Dashboard (Home icon)
  □ Analytics (BarChart icon)
  □ Users (Users icon)
  □ Settings (Settings icon)
  □ Reports (FileText icon)
```

### 3. Main Content Area

**Dimensions:** 1160px × 960px (when sidebar expanded)
**Position:** Right of sidebar, below header
**Padding:** 24px all sides

## Dashboard Content Components

### Stats Cards Row

**Layout:** 4 cards in horizontal row
**Card Dimensions:** 262px × 120px each
**Spacing:** 24px between cards

```
Each Card Structure:
- Background: Card color
- Border: 1px, Border color
- Border Radius: 8px
- Padding: 24px
- Shadow: 0 1px 3px rgba(0,0,0,0.1)

Card Content:
- Icon (24px × 24px, top-left)
- Value (H2 typography, below icon)
- Label (Small typography, muted)
- Change indicator (Small typography, success/destructive color)

Card Types:
1. Total Revenue: $45,231.89 (+20.1% from last month)
2. Subscriptions: +2350 (+180.1% from last month)
3. Sales: +12,234 (+19% from last month)
4. Active Now: +573 (+201 since last hour)
```

### Charts Section

**Layout:** 2 charts side by side
**Dimensions:** 568px × 350px each
**Spacing:** 24px between charts

```
Chart Card Structure:
- Background: Card color
- Border: 1px, Border color
- Border Radius: 8px
- Padding: 24px
- Shadow: 0 1px 3px rgba(0,0,0,0.1)

Chart 1 - Revenue Overview (Bar Chart):
- Title: "Revenue" (H4 typography)
- Subtitle: "January - June 2024" (Small, muted)
- Chart area: 520px × 250px
- Use Chart colors 1-3

Chart 2 - Sales Trend (Line Chart):
- Title: "Sales Trend" (H4 typography)
- Subtitle: "Last 30 days" (Small, muted)
- Chart area: 520px × 250px
- Use Chart colors 4-5
```

### Data Table Section

**Dimensions:** 1112px × 400px
**Position:** Below charts, 24px margin top

```
Table Structure:
- Background: Card color
- Border: 1px, Border color
- Border Radius: 8px
- Shadow: 0 1px 3px rgba(0,0,0,0.1)

Table Header:
- Height: 48px
- Background: Secondary color
- Text: Default typography, font-weight: 600
- Padding: 16px horizontal

Table Rows:
- Height: 52px
- Border bottom: 1px, Border color
- Hover: Secondary color background
- Padding: 16px horizontal

Columns:
1. Customer (200px) - Name + Email
2. Status (100px) - Badge component
3. Amount (120px) - Currency format
4. Date (140px) - Date format
5. Actions (100px) - Button components
```

## Component Library to Create

### 1. Button Components

```
Primary Button:
- Background: Primary color
- Text: Primary foreground color
- Padding: 12px 24px
- Border radius: 6px
- Font: Default, font-weight: 500

Secondary Button:
- Background: Secondary color
- Text: Secondary foreground color
- Border: 1px, Border color
- Padding: 12px 24px
- Border radius: 6px

Destructive Button:
- Background: Destructive color
- Text: Destructive foreground color
- Padding: 12px 24px
- Border radius: 6px
```

### 2. Badge Components

```
Default Badge:
- Background: Secondary color
- Text: Secondary foreground color
- Padding: 4px 12px
- Border radius: 12px
- Font: Small typography

Success Badge:
- Background: Success color
- Text: White
- Same dimensions as default

Warning Badge:
- Background: Warning color
- Text: White
- Same dimensions as default
```

### 3. Input Components

```
Input Field:
- Background: Input color
- Border: 1px, Border color
- Padding: 12px 16px
- Border radius: 6px
- Height: 40px
- Font: Default typography

Focus State:
- Border: 2px, Ring color
- Remove default border
```

## Figma Implementation Steps

1. **Set up Color Variables:**
   - Create local variables for all colors listed above
   - Organize into collections: Primary, Secondary, Chart, Status

2. **Create Text Styles:**
   - Set up all typography styles as Figma text styles
   - Name them: heading-1, heading-2, body-default, body-small, etc.

3. **Build Base Components:**
   - Create Button component with variants (primary, secondary, destructive)
   - Create Badge component with variants (default, success, warning)
   - Create Input component
   - Create Card component (base container)

4. **Layout the Dashboard:**
   - Start with 1440×1024 frame
   - Add header component at top
   - Add sidebar component on left
   - Fill main area with stats cards, charts, and table

5. **Add Interactive States:**
   - Hover states for buttons and menu items
   - Active states for navigation
   - Focus states for inputs

6. **Create Auto Layout:**
   - Use auto layout for flexible responsive behavior
   - Set up proper constraints for resizing

## Export Guidelines

When ready to export assets:

- Export icons as SVG at 24×24px
- Export component variations as PNG at 2x resolution
- Export full dashboard layout as PNG for reference
- Create component specifications document

This specification provides everything needed to create a professional dashboard design in Figma that matches your existing Next.js shadcn/ui implementation.
