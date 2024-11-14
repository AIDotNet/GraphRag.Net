﻿using AntDesign;
using AntDesign.ProLayout;
using GraphRag.Net.Web.Models;
using Microsoft.AspNetCore.Components;

namespace GraphRag.Net.Web.Components;

public partial class RightContent
{
    private int _count = 0;
    private CurrentUser _currentUser = new();
    private NoticeIconData[] _events = { };
    private NoticeIconData[] _messages = { };
    private NoticeIconData[] _notifications = { };

    private List<AutoCompleteDataItem<string>> DefaultOptions { get; set; } = new()
    {
        new AutoCompleteDataItem<string>
        {
            Label = "umi ui",
            Value = "umi ui"
        },
        new AutoCompleteDataItem<string>
        {
            Label = "Pro Table",
            Value = "Pro Table"
        },
        new AutoCompleteDataItem<string>
        {
            Label = "Pro Layout",
            Value = "Pro Layout"
        }
    };

    public AvatarMenuItem[] AvatarMenuItems { get; set; } = new AvatarMenuItem[]
    {
        new() { Key = "center", IconType = "user", Option = "个人中心" },
        new() { Key = "setting", IconType = "setting", Option = "个人设置" },
        new() { IsDivider = true },
        new() { Key = "logout", IconType = "logout", Option = "退出登录" }
    };

    [Inject] protected NavigationManager NavigationManager { get; set; }

    [Inject] protected MessageService MessageService { get; set; }

    protected override async Task OnInitializedAsync()
    {
        await base.OnInitializedAsync();
        SetClassMap();
    }

    protected void SetClassMap()
    {
        ClassMapper
            .Clear()
            .Add("right");
    }

    public void HandleSelectUser(MenuItem item)
    {
        switch (item.Key)
        {
            case "center":
                NavigationManager.NavigateTo("/account/center");
                break;
            case "setting":
                NavigationManager.NavigateTo("/account/settings");
                break;
            case "logout":
                NavigationManager.NavigateTo("/user/login");
                break;
        }
    }

    public void HandleSelectLang(MenuItem item)
    {
    }

    public async Task HandleClear(string key)
    {
        switch (key)
        {
            case "notification":
                _notifications = new NoticeIconData[] { };
                break;
            case "message":
                _messages = new NoticeIconData[] { };
                break;
            case "event":
                _events = new NoticeIconData[] { };
                break;
        }

        await MessageService.Success($"清空了{key}");
    }

    public async Task HandleViewMore(string key)
    {
        await MessageService.Info("Click on view more");
    }
}