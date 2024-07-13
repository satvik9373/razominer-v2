(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        7342: function(e, t, n) {
            "use strict";
            var i, s;
            e.exports = (null == (i = n.g.process) ? void 0 : i.env) && "object" == typeof(null == (s = n.g.process) ? void 0 : s.env) ? n.g.process : n(1818)
        },
        6050: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(3119)
            }])
        },
        9633: function(e, t, n) {
            "use strict";
            n.d(t, {
                fr: function() {
                    return s
                },
                j5: function() {
                    return o
                },
                uR: function() {
                    return u
                }
            });
            var i = n(1349);
            let s = (0, i.oM)({
                    name: "core",
                    initialState: {
                        pickaxe: null,
                        isNewChat: !0
                    },
                    reducers: {
                        updatePickaxe: (e, t) => {
                            e.pickaxe = t.payload
                        },
                        updateIsNewChat: (e, t) => {
                            e.isNewChat = t.payload
                        }
                    }
                }),
                {
                    updatePickaxe: o,
                    updateIsNewChat: u
                } = s.actions;
            s.reducer
        },
        3812: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return U
                },
                S: function() {
                    return z
                }
            });
            var i = n(822),
                s = n(7380),
                o = n(8806),
                u = n(2069),
                l = n(4916);
            let Query = class Query extends l.F {
                constructor(e) {
                    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || s._, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || function(e) {
                        let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
                            n = void 0 !== t,
                            i = n ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
                        return {
                            data: t,
                            dataUpdateCount: 0,
                            dataUpdatedAt: n ? null != i ? i : Date.now() : 0,
                            error: null,
                            errorUpdateCount: 0,
                            errorUpdatedAt: 0,
                            fetchFailureCount: 0,
                            fetchFailureReason: null,
                            fetchMeta: null,
                            isInvalidated: !1,
                            status: n ? "success" : "loading",
                            fetchStatus: "idle"
                        }
                    }(this.options), this.state = this.initialState, this.scheduleGc()
                }
                get meta() {
                    return this.options.meta
                }
                setOptions(e) {
                    this.options = { ...this.defaultOptions,
                        ...e
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                optionalRemove() {
                    this.observers.length || "idle" !== this.state.fetchStatus || this.cache.remove(this)
                }
                setData(e, t) {
                    let n = (0, i.oE)(this.state.data, e, this.options);
                    return this.dispatch({
                        data: n,
                        type: "success",
                        dataUpdatedAt: null == t ? void 0 : t.updatedAt,
                        manual: null == t ? void 0 : t.manual
                    }), n
                }
                setState(e, t) {
                    this.dispatch({
                        type: "setState",
                        state: e,
                        setStateOptions: t
                    })
                }
                cancel(e) {
                    var t;
                    let n = this.promise;
                    return null == (t = this.retryer) || t.cancel(e), n ? n.then(i.ZT).catch(i.ZT) : Promise.resolve()
                }
                destroy() {
                    super.destroy(), this.cancel({
                        silent: !0
                    })
                }
                reset() {
                    this.destroy(), this.setState(this.initialState)
                }
                isActive() {
                    return this.observers.some(e => !1 !== e.options.enabled)
                }
                isDisabled() {
                    return this.getObserversCount() > 0 && !this.isActive()
                }
                isStale() {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(e => e.getCurrentResult().isStale)
                }
                isStaleByTime(e = 0) {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0, i.Kp)(this.state.dataUpdatedAt, e)
                }
                onFocus() {
                    var e;
                    let t = this.observers.find(e => e.shouldFetchOnWindowFocus());
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                onOnline() {
                    var e;
                    let t = this.observers.find(e => e.shouldFetchOnReconnect());
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                addObserver(e) {
                    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
                        type: "observerAdded",
                        query: this,
                        observer: e
                    }))
                }
                removeObserver(e) {
                    this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
                        revert: !0
                    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
                        type: "observerRemoved",
                        query: this,
                        observer: e
                    }))
                }
                getObserversCount() {
                    return this.observers.length
                }
                invalidate() {
                    this.state.isInvalidated || this.dispatch({
                        type: "invalidate"
                    })
                }
                fetch(e, t) {
                    var n, s, o, l;
                    if ("idle" !== this.state.fetchStatus) {
                        if (this.state.dataUpdatedAt && null != t && t.cancelRefetch) this.cancel({
                            silent: !0
                        });
                        else if (this.promise) return null == (o = this.retryer) || o.continueRetry(), this.promise
                    }
                    if (e && this.setOptions(e), !this.options.queryFn) {
                        let e = this.observers.find(e => e.options.queryFn);
                        e && this.setOptions(e.options)
                    }
                    let c = (0, i.G9)(),
                        f = {
                            queryKey: this.queryKey,
                            pageParam: void 0,
                            meta: this.meta
                        },
                        addSignalProperty = e => {
                            Object.defineProperty(e, "signal", {
                                enumerable: !0,
                                get: () => {
                                    if (c) return this.abortSignalConsumed = !0, c.signal
                                }
                            })
                        };
                    addSignalProperty(f);
                    let h = {
                        fetchOptions: t,
                        options: this.options,
                        queryKey: this.queryKey,
                        state: this.state,
                        fetchFn: () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(f)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'")
                    };
                    addSignalProperty(h), null == (n = this.options.behavior) || n.onFetch(h), this.revertState = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (s = h.fetchOptions) ? void 0 : s.meta)) && this.dispatch({
                        type: "fetch",
                        meta: null == (l = h.fetchOptions) ? void 0 : l.meta
                    });
                    let onError = e => {
                        if ((0, u.DV)(e) && e.silent || this.dispatch({
                                type: "error",
                                error: e
                            }), !(0, u.DV)(e)) {
                            var t, n, i, s;
                            null == (t = (n = this.cache.config).onError) || t.call(n, e, this), null == (i = (s = this.cache.config).onSettled) || i.call(s, this.state.data, e, this)
                        }
                        this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                    };
                    return this.retryer = (0, u.Mz)({
                        fn: h.fetchFn,
                        abort: null == c ? void 0 : c.abort.bind(c),
                        onSuccess: e => {
                            var t, n, i, s;
                            if (void 0 === e) {
                                onError(Error(this.queryHash + " data is undefined"));
                                return
                            }
                            this.setData(e), null == (t = (n = this.cache.config).onSuccess) || t.call(n, e, this), null == (i = (s = this.cache.config).onSettled) || i.call(s, e, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                        },
                        onError,
                        onFail: (e, t) => {
                            this.dispatch({
                                type: "failed",
                                failureCount: e,
                                error: t
                            })
                        },
                        onPause: () => {
                            this.dispatch({
                                type: "pause"
                            })
                        },
                        onContinue: () => {
                            this.dispatch({
                                type: "continue"
                            })
                        },
                        retry: h.options.retry,
                        retryDelay: h.options.retryDelay,
                        networkMode: h.options.networkMode
                    }), this.promise = this.retryer.promise, this.promise
                }
                dispatch(e) {
                    this.state = (t => {
                        var n, i;
                        switch (e.type) {
                            case "failed":
                                return { ...t,
                                    fetchFailureCount: e.failureCount,
                                    fetchFailureReason: e.error
                                };
                            case "pause":
                                return { ...t,
                                    fetchStatus: "paused"
                                };
                            case "continue":
                                return { ...t,
                                    fetchStatus: "fetching"
                                };
                            case "fetch":
                                return { ...t,
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null,
                                    fetchMeta: null != (n = e.meta) ? n : null,
                                    fetchStatus: (0, u.Kw)(this.options.networkMode) ? "fetching" : "paused",
                                    ...!t.dataUpdatedAt && {
                                        error: null,
                                        status: "loading"
                                    }
                                };
                            case "success":
                                return { ...t,
                                    data: e.data,
                                    dataUpdateCount: t.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (i = e.dataUpdatedAt) ? i : Date.now(),
                                    error: null,
                                    isInvalidated: !1,
                                    status: "success",
                                    ...!e.manual && {
                                        fetchStatus: "idle",
                                        fetchFailureCount: 0,
                                        fetchFailureReason: null
                                    }
                                };
                            case "error":
                                let s = e.error;
                                if ((0, u.DV)(s) && s.revert && this.revertState) return { ...this.revertState,
                                    fetchStatus: "idle"
                                };
                                return { ...t,
                                    error: s,
                                    errorUpdateCount: t.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: t.fetchFailureCount + 1,
                                    fetchFailureReason: s,
                                    fetchStatus: "idle",
                                    status: "error"
                                };
                            case "invalidate":
                                return { ...t,
                                    isInvalidated: !0
                                };
                            case "setState":
                                return { ...t,
                                    ...e.state
                                }
                        }
                    })(this.state), o.V.batch(() => {
                        this.observers.forEach(t => {
                            t.onQueryUpdate(e)
                        }), this.cache.notify({
                            query: this,
                            type: "updated",
                            action: e
                        })
                    })
                }
            };
            var c = n(1002);
            let QueryCache = class QueryCache extends c.l {
                constructor(e) {
                    super(), this.config = e || {}, this.queries = [], this.queriesMap = {}
                }
                build(e, t, n) {
                    var s;
                    let o = t.queryKey,
                        u = null != (s = t.queryHash) ? s : (0, i.Rm)(o, t),
                        l = this.get(u);
                    return l || (l = new Query({
                        cache: this,
                        logger: e.getLogger(),
                        queryKey: o,
                        queryHash: u,
                        options: e.defaultQueryOptions(t),
                        state: n,
                        defaultOptions: e.getQueryDefaults(o)
                    }), this.add(l)), l
                }
                add(e) {
                    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
                        type: "added",
                        query: e
                    }))
                }
                remove(e) {
                    let t = this.queriesMap[e.queryHash];
                    t && (e.destroy(), this.queries = this.queries.filter(t => t !== e), t === e && delete this.queriesMap[e.queryHash], this.notify({
                        type: "removed",
                        query: e
                    }))
                }
                clear() {
                    o.V.batch(() => {
                        this.queries.forEach(e => {
                            this.remove(e)
                        })
                    })
                }
                get(e) {
                    return this.queriesMap[e]
                }
                getAll() {
                    return this.queries
                }
                find(e, t) {
                    let [n] = (0, i.I6)(e, t);
                    return void 0 === n.exact && (n.exact = !0), this.queries.find(e => (0, i._x)(n, e))
                }
                findAll(e, t) {
                    let [n] = (0, i.I6)(e, t);
                    return Object.keys(n).length > 0 ? this.queries.filter(e => (0, i._x)(n, e)) : this.queries
                }
                notify(e) {
                    o.V.batch(() => {
                        this.listeners.forEach(({
                            listener: t
                        }) => {
                            t(e)
                        })
                    })
                }
                onFocus() {
                    o.V.batch(() => {
                        this.queries.forEach(e => {
                            e.onFocus()
                        })
                    })
                }
                onOnline() {
                    o.V.batch(() => {
                        this.queries.forEach(e => {
                            e.onOnline()
                        })
                    })
                }
            };
            var f = n(8276);
            let MutationCache = class MutationCache extends c.l {
                constructor(e) {
                    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0
                }
                build(e, t, n) {
                    let i = new f.m({
                        mutationCache: this,
                        logger: e.getLogger(),
                        mutationId: ++this.mutationId,
                        options: e.defaultMutationOptions(t),
                        state: n,
                        defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0
                    });
                    return this.add(i), i
                }
                add(e) {
                    this.mutations.push(e), this.notify({
                        type: "added",
                        mutation: e
                    })
                }
                remove(e) {
                    this.mutations = this.mutations.filter(t => t !== e), this.notify({
                        type: "removed",
                        mutation: e
                    })
                }
                clear() {
                    o.V.batch(() => {
                        this.mutations.forEach(e => {
                            this.remove(e)
                        })
                    })
                }
                getAll() {
                    return this.mutations
                }
                find(e) {
                    return void 0 === e.exact && (e.exact = !0), this.mutations.find(t => (0, i.X7)(e, t))
                }
                findAll(e) {
                    return this.mutations.filter(t => (0, i.X7)(e, t))
                }
                notify(e) {
                    o.V.batch(() => {
                        this.listeners.forEach(({
                            listener: t
                        }) => {
                            t(e)
                        })
                    })
                }
                resumePausedMutations() {
                    var e;
                    return this.resuming = (null != (e = this.resuming) ? e : Promise.resolve()).then(() => {
                        let e = this.mutations.filter(e => e.state.isPaused);
                        return o.V.batch(() => e.reduce((e, t) => e.then(() => t.continue().catch(i.ZT)), Promise.resolve()))
                    }).then(() => {
                        this.resuming = void 0
                    }), this.resuming
                }
            };
            var h = n(3621),
                d = n(7080),
                p = n(9567);
            let QueryClient = class QueryClient {
                constructor(e = {}) {
                    this.queryCache = e.queryCache || new QueryCache, this.mutationCache = e.mutationCache || new MutationCache, this.logger = e.logger || s._, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0
                }
                mount() {
                    this.mountCount++, 1 === this.mountCount && (this.unsubscribeFocus = h.j.subscribe(() => {
                        h.j.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
                    }), this.unsubscribeOnline = d.N.subscribe(() => {
                        d.N.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
                    }))
                }
                unmount() {
                    var e, t;
                    this.mountCount--, 0 === this.mountCount && (null == (e = this.unsubscribeFocus) || e.call(this), this.unsubscribeFocus = void 0, null == (t = this.unsubscribeOnline) || t.call(this), this.unsubscribeOnline = void 0)
                }
                isFetching(e, t) {
                    let [n] = (0, i.I6)(e, t);
                    return n.fetchStatus = "fetching", this.queryCache.findAll(n).length
                }
                isMutating(e) {
                    return this.mutationCache.findAll({ ...e,
                        fetching: !0
                    }).length
                }
                getQueryData(e, t) {
                    var n;
                    return null == (n = this.queryCache.find(e, t)) ? void 0 : n.state.data
                }
                ensureQueryData(e, t, n) {
                    let s = (0, i._v)(e, t, n),
                        o = this.getQueryData(s.queryKey);
                    return o ? Promise.resolve(o) : this.fetchQuery(s)
                }
                getQueriesData(e) {
                    return this.getQueryCache().findAll(e).map(({
                        queryKey: e,
                        state: t
                    }) => {
                        let n = t.data;
                        return [e, n]
                    })
                }
                setQueryData(e, t, n) {
                    let s = this.queryCache.find(e),
                        o = null == s ? void 0 : s.state.data,
                        u = (0, i.SE)(t, o);
                    if (void 0 === u) return;
                    let l = (0, i._v)(e),
                        c = this.defaultQueryOptions(l);
                    return this.queryCache.build(this, c).setData(u, { ...n,
                        manual: !0
                    })
                }
                setQueriesData(e, t, n) {
                    return o.V.batch(() => this.getQueryCache().findAll(e).map(({
                        queryKey: e
                    }) => [e, this.setQueryData(e, t, n)]))
                }
                getQueryState(e, t) {
                    var n;
                    return null == (n = this.queryCache.find(e, t)) ? void 0 : n.state
                }
                removeQueries(e, t) {
                    let [n] = (0, i.I6)(e, t), s = this.queryCache;
                    o.V.batch(() => {
                        s.findAll(n).forEach(e => {
                            s.remove(e)
                        })
                    })
                }
                resetQueries(e, t, n) {
                    let [s, u] = (0, i.I6)(e, t, n), l = this.queryCache, c = {
                        type: "active",
                        ...s
                    };
                    return o.V.batch(() => (l.findAll(s).forEach(e => {
                        e.reset()
                    }), this.refetchQueries(c, u)))
                }
                cancelQueries(e, t, n) {
                    let [s, u = {}] = (0, i.I6)(e, t, n);
                    void 0 === u.revert && (u.revert = !0);
                    let l = o.V.batch(() => this.queryCache.findAll(s).map(e => e.cancel(u)));
                    return Promise.all(l).then(i.ZT).catch(i.ZT)
                }
                invalidateQueries(e, t, n) {
                    let [s, u] = (0, i.I6)(e, t, n);
                    return o.V.batch(() => {
                        var e, t;
                        if (this.queryCache.findAll(s).forEach(e => {
                                e.invalidate()
                            }), "none" === s.refetchType) return Promise.resolve();
                        let n = { ...s,
                            type: null != (e = null != (t = s.refetchType) ? t : s.type) ? e : "active"
                        };
                        return this.refetchQueries(n, u)
                    })
                }
                refetchQueries(e, t, n) {
                    let [s, u] = (0, i.I6)(e, t, n), l = o.V.batch(() => this.queryCache.findAll(s).filter(e => !e.isDisabled()).map(e => {
                        var t;
                        return e.fetch(void 0, { ...u,
                            cancelRefetch: null == (t = null == u ? void 0 : u.cancelRefetch) || t,
                            meta: {
                                refetchPage: s.refetchPage
                            }
                        })
                    })), c = Promise.all(l).then(i.ZT);
                    return null != u && u.throwOnError || (c = c.catch(i.ZT)), c
                }
                fetchQuery(e, t, n) {
                    let s = (0, i._v)(e, t, n),
                        o = this.defaultQueryOptions(s);
                    void 0 === o.retry && (o.retry = !1);
                    let u = this.queryCache.build(this, o);
                    return u.isStaleByTime(o.staleTime) ? u.fetch(o) : Promise.resolve(u.state.data)
                }
                prefetchQuery(e, t, n) {
                    return this.fetchQuery(e, t, n).then(i.ZT).catch(i.ZT)
                }
                fetchInfiniteQuery(e, t, n) {
                    let s = (0, i._v)(e, t, n);
                    return s.behavior = (0, p.Gm)(), this.fetchQuery(s)
                }
                prefetchInfiniteQuery(e, t, n) {
                    return this.fetchInfiniteQuery(e, t, n).then(i.ZT).catch(i.ZT)
                }
                resumePausedMutations() {
                    return this.mutationCache.resumePausedMutations()
                }
                getQueryCache() {
                    return this.queryCache
                }
                getMutationCache() {
                    return this.mutationCache
                }
                getLogger() {
                    return this.logger
                }
                getDefaultOptions() {
                    return this.defaultOptions
                }
                setDefaultOptions(e) {
                    this.defaultOptions = e
                }
                setQueryDefaults(e, t) {
                    let n = this.queryDefaults.find(t => (0, i.yF)(e) === (0, i.yF)(t.queryKey));
                    n ? n.defaultOptions = t : this.queryDefaults.push({
                        queryKey: e,
                        defaultOptions: t
                    })
                }
                getQueryDefaults(e) {
                    if (!e) return;
                    let t = this.queryDefaults.find(t => (0, i.to)(e, t.queryKey));
                    return null == t ? void 0 : t.defaultOptions
                }
                setMutationDefaults(e, t) {
                    let n = this.mutationDefaults.find(t => (0, i.yF)(e) === (0, i.yF)(t.mutationKey));
                    n ? n.defaultOptions = t : this.mutationDefaults.push({
                        mutationKey: e,
                        defaultOptions: t
                    })
                }
                getMutationDefaults(e) {
                    if (!e) return;
                    let t = this.mutationDefaults.find(t => (0, i.to)(e, t.mutationKey));
                    return null == t ? void 0 : t.defaultOptions
                }
                defaultQueryOptions(e) {
                    if (null != e && e._defaulted) return e;
                    let t = { ...this.defaultOptions.queries,
                        ...this.getQueryDefaults(null == e ? void 0 : e.queryKey),
                        ...e,
                        _defaulted: !0
                    };
                    return !t.queryHash && t.queryKey && (t.queryHash = (0, i.Rm)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.useErrorBoundary && (t.useErrorBoundary = !!t.suspense), t
                }
                defaultMutationOptions(e) {
                    return null != e && e._defaulted ? e : { ...this.defaultOptions.mutations,
                        ...this.getMutationDefaults(null == e ? void 0 : e.mutationKey),
                        ...e,
                        _defaulted: !0
                    }
                }
                clear() {
                    this.queryCache.clear(), this.mutationCache.clear()
                }
            };
            let ObservableAbortError = class ObservableAbortError extends Error {
                constructor(e) {
                    super(e), this.name = "ObservableAbortError", Object.setPrototypeOf(this, ObservableAbortError.prototype)
                }
            };

            function observable_ade1bad8_observable(e) {
                let t = {
                    subscribe(t) {
                        let n = null,
                            i = !1,
                            s = !1,
                            o = !1;

                        function unsubscribe() {
                            if (null === n) {
                                o = !0;
                                return
                            }!s && (s = !0, "function" == typeof n ? n() : n && n.unsubscribe())
                        }
                        return n = e({
                            next(e) {
                                i || t.next ? .(e)
                            },
                            error(e) {
                                i || (i = !0, t.error ? .(e), unsubscribe())
                            },
                            complete() {
                                i || (i = !0, t.complete ? .(), unsubscribe())
                            }
                        }), o && unsubscribe(), {
                            unsubscribe
                        }
                    },
                    pipe: (...e) => (0 === e.length ? function(e) {
                        return e
                    } : 1 === e.length ? e[0] : function(t) {
                        return e.reduce((e, t) => t(e), t)
                    })(t)
                };
                return t
            }

            function invert(e) {
                let t = Object.create(null);
                for (let n in e) {
                    let i = e[n];
                    t[i] = n
                }
                return t
            }
            let y = {
                PARSE_ERROR: -32700,
                BAD_REQUEST: -32600,
                INTERNAL_SERVER_ERROR: -32603,
                NOT_IMPLEMENTED: -32603,
                UNAUTHORIZED: -32001,
                FORBIDDEN: -32003,
                NOT_FOUND: -32004,
                METHOD_NOT_SUPPORTED: -32005,
                TIMEOUT: -32008,
                CONFLICT: -32009,
                PRECONDITION_FAILED: -32012,
                PAYLOAD_TOO_LARGE: -32013,
                UNPROCESSABLE_CONTENT: -32022,
                TOO_MANY_REQUESTS: -32029,
                CLIENT_CLOSED_REQUEST: -32099
            };
            invert(y), invert(y);
            let noop = () => {},
                createRecursiveProxy = e => (function createInnerProxy(e, t) {
                    let n = new Proxy(noop, {
                        get(n, i) {
                            if ("string" == typeof i && "then" !== i) return createInnerProxy(e, [...t, i])
                        },
                        apply(n, i, s) {
                            let o = "apply" === t[t.length - 1];
                            return e({
                                args: o ? s.length >= 2 ? s[1] : [] : s,
                                path: o ? t.slice(0, -1) : t
                            })
                        }
                    });
                    return n
                })(e, []),
                createFlatProxy = e => new Proxy(noop, {
                    get(t, n) {
                        if ("string" == typeof n && "then" !== n) return e(n)
                    }
                });
            let UnknownCauseError = class UnknownCauseError extends Error {};

            function transformResult_ace864b8_isObject(e) {
                return !!e && !Array.isArray(e) && "object" == typeof e
            }
            let TransformResultError = class TransformResultError extends Error {
                constructor() {
                    super("Unable to transform response from server")
                }
            };

            function transformResult_ace864b8_transformResult(e, t) {
                let n;
                try {
                    n = function(e, t) {
                        if ("error" in e) {
                            let n = t.transformer.deserialize(e.error);
                            return {
                                ok: !1,
                                error: { ...e,
                                    error: n
                                }
                            }
                        }
                        let n = { ...e.result,
                            ...(!e.result.type || "data" === e.result.type) && {
                                type: "data",
                                data: t.transformer.deserialize(e.result.data)
                            }
                        };
                        return {
                            ok: !0,
                            result: n
                        }
                    }(e, t)
                } catch (e) {
                    throw new TransformResultError
                }
                if (!n.ok && (!transformResult_ace864b8_isObject(n.error.error) || "number" != typeof n.error.error.code) || n.ok && !transformResult_ace864b8_isObject(n.result)) throw new TransformResultError;
                return n
            }
            let TRPCClientError_38f9a32a_TRPCClientError = class TRPCClientError_38f9a32a_TRPCClientError extends Error {
                static from(e, t = {}) {
                    return e instanceof TRPCClientError_38f9a32a_TRPCClientError || e instanceof Error && "TRPCClientError" === e.name ? (t.meta && (e.meta = { ...e.meta,
                        ...t.meta
                    }), e) : transformResult_ace864b8_isObject(e) && transformResult_ace864b8_isObject(e.error) && "number" == typeof e.error.code && "string" == typeof e.error.message ? new TRPCClientError_38f9a32a_TRPCClientError(e.error.message, { ...t,
                        result: e
                    }) : e instanceof Error ? new TRPCClientError_38f9a32a_TRPCClientError(e.message, { ...t,
                        cause: function(e) {
                            if (e instanceof Error) return e;
                            let t = typeof e;
                            if ("undefined" !== t && "function" !== t && null !== e) {
                                if ("object" !== t) return Error(String(e));
                                if (e && !Array.isArray(e) && "object" == typeof e) {
                                    let t = new UnknownCauseError;
                                    for (let n in e) t[n] = e[n];
                                    return t
                                }
                            }
                        }(e)
                    }) : new TRPCClientError_38f9a32a_TRPCClientError("Unknown error", { ...t,
                        cause: e
                    })
                }
                constructor(e, t) {
                    let n = t ? .cause;
                    super(e, {
                        cause: n
                    }), this.meta = t ? .meta, this.cause = n, this.shape = t ? .result ? .error, this.data = t ? .result ? .error.data, this.name = "TRPCClientError", Object.setPrototypeOf(this, TRPCClientError_38f9a32a_TRPCClientError.prototype)
                }
            };
            let isFunction = e => "function" == typeof e;

            function resolveHTTPLinkOptions(e) {
                var t;
                return {
                    url: e.url.toString().replace(/\/$/, ""),
                    fetch: e.fetch,
                    AbortController: (t = e.AbortController) ? t : "undefined" != typeof window && window.AbortController ? window.AbortController : "undefined" != typeof globalThis && globalThis.AbortController ? globalThis.AbortController : null
                }
            }
            let m = {
                query: "GET",
                mutation: "POST"
            };

            function getInput(e) {
                return "input" in e ? e.runtime.transformer.serialize(e.input) : function(e) {
                    let t = {};
                    for (let n = 0; n < e.length; n++) {
                        let i = e[n];
                        t[n] = i
                    }
                    return t
                }(e.inputs.map(t => e.runtime.transformer.serialize(t)))
            }
            let getUrl = e => {
                    let t = e.url + "/" + e.path,
                        n = [];
                    if ("inputs" in e && n.push("batch=1"), "query" === e.type) {
                        let t = getInput(e);
                        void 0 !== t && n.push(`input=${encodeURIComponent(JSON.stringify(t))}`)
                    }
                    return n.length && (t += "?" + n.join("&")), t
                },
                getBody = e => {
                    if ("query" === e.type) return;
                    let t = getInput(e);
                    return void 0 !== t ? JSON.stringify(t) : void 0
                },
                jsonHttpRequester = e => httpRequest({ ...e,
                    contentTypeHeader: "application/json",
                    getUrl,
                    getBody
                });
            async function fetchHTTPResponse(e, t) {
                let n = e.getUrl(e),
                    i = e.getBody(e),
                    {
                        type: s
                    } = e,
                    o = await e.headers(); /* istanbul ignore if -- @preserve */
                if ("subscription" === s) throw Error("Subscriptions should use wsLink");
                let u = { ...e.contentTypeHeader ? {
                        "content-type": e.contentTypeHeader
                    } : {},
                    ...e.batchModeHeader ? {
                        "trpc-batch-mode": e.batchModeHeader
                    } : {},
                    ...o
                };
                return (function(e) {
                    if (e) return e;
                    if ("undefined" != typeof window && isFunction(window.fetch)) return window.fetch;
                    if ("undefined" != typeof globalThis && isFunction(globalThis.fetch)) return globalThis.fetch;
                    throw Error("No fetch implementation found")
                })(e.fetch)(n, {
                    method: m[s],
                    signal: t ? .signal,
                    body: i,
                    headers: u
                })
            }

            function httpRequest(e) {
                let t = e.AbortController ? new e.AbortController : null,
                    n = {},
                    i = !1,
                    s = new Promise((s, o) => {
                        fetchHTTPResponse(e, t).then(e => (n.response = e, i = !0, e.json())).then(e => {
                            n.responseJSON = e, s({
                                json: e,
                                meta: n
                            })
                        }).catch(e => {
                            i = !0, o(TRPCClientError_38f9a32a_TRPCClientError.from(e, {
                                meta: n
                            }))
                        })
                    });
                return {
                    promise: s,
                    cancel: () => {
                        i || t ? .abort()
                    }
                }
            }
            let throwFatalError = () => {
                throw Error("Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new")
            };

            function dataLoader(e) {
                let t = null,
                    n = null,
                    destroyTimerAndPendingItems = () => {
                        clearTimeout(n), n = null, t = null
                    };

                function dispatch() {
                    let n = function(t) {
                        let n = [
                                []
                            ],
                            i = 0;
                        for (;;) {
                            let s = t[i];
                            if (!s) break;
                            let o = n[n.length - 1];
                            if (s.aborted) {
                                s.reject ? .(Error("Aborted")), i++;
                                continue
                            }
                            let u = e.validate(o.concat(s).map(e => e.key));
                            if (u) {
                                o.push(s), i++;
                                continue
                            }
                            if (0 === o.length) {
                                s.reject ? .(Error("Input is too big for a single dispatch")), i++;
                                continue
                            }
                            n.push([])
                        }
                        return n
                    }(t);
                    for (let t of (destroyTimerAndPendingItems(), n)) {
                        if (!t.length) continue;
                        let n = {
                            items: t,
                            cancel: throwFatalError
                        };
                        for (let e of t) e.batch = n;
                        let unitResolver = (e, t) => {
                                let i = n.items[e];
                                i.resolve ? .(t), i.batch = null, i.reject = null, i.resolve = null
                            },
                            {
                                promise: i,
                                cancel: s
                            } = e.fetch(n.items.map(e => e.key), unitResolver);
                        n.cancel = s, i.then(e => {
                            for (let t = 0; t < e.length; t++) {
                                let n = e[t];
                                unitResolver(t, n)
                            }
                            for (let e of n.items) e.reject ? .(Error("Missing result")), e.batch = null
                        }).catch(e => {
                            for (let t of n.items) t.reject ? .(e), t.batch = null
                        })
                    }
                }
                return {
                    load: function(e) {
                        let i = {
                                aborted: !1,
                                key: e,
                                batch: null,
                                resolve: throwFatalError,
                                reject: throwFatalError
                            },
                            s = new Promise((e, n) => {
                                i.reject = n, i.resolve = e, t || (t = []), t.push(i)
                            });
                        return n || (n = setTimeout(dispatch)), {
                            promise: s,
                            cancel: () => {
                                i.aborted = !0, i.batch ? .items.every(e => e.aborted) && (i.batch.cancel(), i.batch = null)
                            }
                        }
                    }
                }
            }

            function createHTTPBatchLink(e) {
                return function(t) {
                    let n = resolveHTTPLinkOptions(t),
                        i = t.maxURLLength ? ? 1 / 0;
                    return s => {
                        let batchLoader = o => {
                                let u = e({ ...n,
                                    runtime: s,
                                    type: o,
                                    opts: t
                                });
                                return {
                                    validate: e => {
                                        if (i === 1 / 0) return !0;
                                        let t = e.map(e => e.path).join(","),
                                            u = e.map(e => e.input),
                                            l = getUrl({ ...n,
                                                runtime: s,
                                                type: o,
                                                path: t,
                                                inputs: u
                                            });
                                        return l.length <= i
                                    },
                                    fetch: u
                                }
                            },
                            o = dataLoader(batchLoader("query")),
                            u = dataLoader(batchLoader("mutation")),
                            l = dataLoader(batchLoader("subscription")),
                            c = {
                                query: o,
                                subscription: l,
                                mutation: u
                            };
                        return ({
                            op: e
                        }) => observable_ade1bad8_observable(t => {
                            let n;
                            let i = c[e.type],
                                {
                                    promise: o,
                                    cancel: u
                                } = i.load(e);
                            return o.then(e => {
                                n = e;
                                let i = transformResult_ace864b8_transformResult(e.json, s);
                                if (!i.ok) {
                                    t.error(TRPCClientError_38f9a32a_TRPCClientError.from(i.error, {
                                        meta: e.meta
                                    }));
                                    return
                                }
                                t.next({
                                    context: e.meta,
                                    result: i.result
                                }), t.complete()
                            }).catch(e => {
                                t.error(TRPCClientError_38f9a32a_TRPCClientError.from(e, {
                                    meta: n ? .meta
                                }))
                            }), () => {
                                u()
                            }
                        })
                    }
                }
            }
            let g = createHTTPBatchLink(e => t => {
                let n = t.map(e => e.path).join(","),
                    i = t.map(e => e.input),
                    {
                        promise: s,
                        cancel: o
                    } = jsonHttpRequester({ ...e,
                        path: n,
                        inputs: i,
                        headers: () => e.opts.headers ? "function" == typeof e.opts.headers ? e.opts.headers({
                            opList: t
                        }) : e.opts.headers : {}
                    });
                return {
                    promise: s.then(e => {
                        let n = Array.isArray(e.json) ? e.json : t.map(() => e.json),
                            i = n.map(t => ({
                                meta: e.meta,
                                json: t
                            }));
                        return i
                    }),
                    cancel: o
                }
            });

            function httpLinkFactory(e) {
                return t => {
                    let n = resolveHTTPLinkOptions(t);
                    return i => ({
                        op: s
                    }) => observable_ade1bad8_observable(o => {
                        let u;
                        let {
                            path: l,
                            input: c,
                            type: f
                        } = s, {
                            promise: h,
                            cancel: d
                        } = e.requester({ ...n,
                            runtime: i,
                            type: f,
                            path: l,
                            input: c,
                            headers: () => t.headers ? "function" == typeof t.headers ? t.headers({
                                op: s
                            }) : t.headers : {}
                        });
                        return h.then(e => {
                            u = e.meta;
                            let t = transformResult_ace864b8_transformResult(e.json, i);
                            if (!t.ok) {
                                o.error(TRPCClientError_38f9a32a_TRPCClientError.from(t.error, {
                                    meta: u
                                }));
                                return
                            }
                            o.next({
                                context: e.meta,
                                result: t.result
                            }), o.complete()
                        }).catch(e => {
                            o.error(TRPCClientError_38f9a32a_TRPCClientError.from(e, {
                                meta: u
                            }))
                        }), () => {
                            d()
                        }
                    })
                }
            }
            httpLinkFactory({
                requester: jsonHttpRequester
            });
            let b = {
                    css: {
                        query: ["72e3ff", "3fb0d8"],
                        mutation: ["c5a3fc", "904dfc"],
                        subscription: ["ff49e1", "d83fbe"]
                    },
                    ansi: {
                        regular: {
                            query: ["\x1b[30;46m", "\x1b[97;46m"],
                            mutation: ["\x1b[30;45m", "\x1b[97;45m"],
                            subscription: ["\x1b[30;42m", "\x1b[97;42m"]
                        },
                        bold: {
                            query: ["\x1b[1;30;46m", "\x1b[1;97;46m"],
                            mutation: ["\x1b[1;30;45m", "\x1b[1;97;45m"],
                            subscription: ["\x1b[1;30;42m", "\x1b[1;97;42m"]
                        }
                    }
                },
                defaultLogger = ({
                    c: e = console,
                    colorMode: t = "css"
                }) => n => {
                    let i = n.input,
                        s = "undefined" != typeof FormData && i instanceof FormData ? Object.fromEntries(i) : i,
                        {
                            parts: o,
                            args: u
                        } = function(e) {
                            let {
                                direction: t,
                                type: n,
                                path: i,
                                id: s,
                                input: o
                            } = e, u = [], l = [];
                            if ("ansi" === e.colorMode) {
                                let [o, c] = b.ansi.regular[n], [f, h] = b.ansi.bold[n];
                                return u.push("up" === t ? o : c, "up" === t ? ">>" : "<<", n, "up" === t ? f : h, `#${s}`, i, "\x1b[0m"), "up" === t ? l.push({
                                    input: e.input
                                }) : l.push({
                                    input: e.input,
                                    result: "result" in e.result ? e.result.result : e.result,
                                    elapsedMs: e.elapsedMs
                                }), {
                                    parts: u,
                                    args: l
                                }
                            }
                            let [c, f] = b.css[n], h = `
    background-color: #${"up"===t?c:f}; 
    color: ${"up"===t?"black":"white"};
    padding: 2px;
  `;
                            return u.push("%c", "up" === t ? ">>" : "<<", n, `#${s}`, `%c${i}%c`, "%O"), l.push(h, `${h}; font-weight: bold;`, `${h}; font-weight: normal;`), "up" === t ? l.push({
                                input: o,
                                context: e.context
                            }) : l.push({
                                input: o,
                                result: e.result,
                                elapsedMs: e.elapsedMs,
                                context: e.context
                            }), {
                                parts: u,
                                args: l
                            }
                        }({ ...n,
                            colorMode: t,
                            input: s
                        }),
                        l = "down" === n.direction && n.result && (n.result instanceof Error || "error" in n.result.result) ? "error" : "log";
                    e[l].apply(null, [o.join(" ")].concat(u))
                };
            let TRPCUntypedClient = class TRPCUntypedClient {
                $request({
                    type: e,
                    input: t,
                    path: n,
                    context: i = {}
                }) {
                    var s;
                    let o = (s = {
                        links: this.links,
                        op: {
                            id: ++this.requestId,
                            type: e,
                            path: n,
                            input: t,
                            context: i
                        }
                    }, observable_ade1bad8_observable(e => {
                        let t = function execute(e = 0, t = s.op) {
                            let n = s.links[e];
                            if (!n) throw Error("No more links to execute - did you forget to add an ending link?");
                            let i = n({
                                op: t,
                                next(t) {
                                    let n = execute(e + 1, t);
                                    return n
                                }
                            });
                            return i
                        }();
                        return t.subscribe(e)
                    }));
                    return o.pipe(e => {
                        let t = 0,
                            n = null,
                            i = [];
                        return {
                            subscribe: s => (t++, i.push(s), n || (n = e.subscribe({
                                next(e) {
                                    for (let t of i) t.next ? .(e)
                                },
                                error(e) {
                                    for (let t of i) t.error ? .(e)
                                },
                                complete() {
                                    for (let e of i) e.complete ? .()
                                }
                            })), {
                                unsubscribe() {
                                    t--,
                                    function() {
                                        if (0 === t && n) {
                                            let e = n;
                                            n = null, e.unsubscribe()
                                        }
                                    }();
                                    let e = i.findIndex(e => e === s);
                                    e > -1 && i.splice(e, 1)
                                }
                            })
                        }
                    })
                }
                requestAsPromise(e) {
                    let t = this.$request(e),
                        {
                            promise: n,
                            abort: i
                        } = function(e) {
                            let t;
                            let n = new Promise((n, i) => {
                                let s = !1;

                                function onDone() {
                                    s || (s = !0, i(new ObservableAbortError("This operation was aborted.")), o.unsubscribe())
                                }
                                let o = e.subscribe({
                                    next(e) {
                                        s = !0, n(e), onDone()
                                    },
                                    error(e) {
                                        s = !0, i(e), onDone()
                                    },
                                    complete() {
                                        s = !0, onDone()
                                    }
                                });
                                t = onDone
                            });
                            return {
                                promise: n,
                                abort: t
                            }
                        }(t),
                        s = new Promise((t, s) => {
                            e.signal ? .addEventListener("abort", i), n.then(e => {
                                t(e.result.data)
                            }).catch(e => {
                                s(TRPCClientError_38f9a32a_TRPCClientError.from(e))
                            })
                        });
                    return s
                }
                query(e, t, n) {
                    return this.requestAsPromise({
                        type: "query",
                        path: e,
                        input: t,
                        context: n ? .context,
                        signal: n ? .signal
                    })
                }
                mutation(e, t, n) {
                    return this.requestAsPromise({
                        type: "mutation",
                        path: e,
                        input: t,
                        context: n ? .context,
                        signal: n ? .signal
                    })
                }
                subscription(e, t, n) {
                    let i = this.$request({
                        type: "subscription",
                        path: e,
                        input: t,
                        context: n ? .context
                    });
                    return i.subscribe({
                        next(e) {
                            "started" === e.result.type ? n.onStarted ? .() : "stopped" === e.result.type ? n.onStopped ? .() : n.onData ? .(e.result.data)
                        },
                        error(e) {
                            n.onError ? .(e)
                        },
                        complete() {
                            n.onComplete ? .()
                        }
                    })
                }
                constructor(e) {
                    this.requestId = 0;
                    let t = (() => {
                        let t = e.transformer;
                        return t ? "input" in t ? e.transformer : {
                            input: t,
                            output: t
                        } : {
                            input: {
                                serialize: e => e,
                                deserialize: e => e
                            },
                            output: {
                                serialize: e => e,
                                deserialize: e => e
                            }
                        }
                    })();
                    this.runtime = {
                        transformer: {
                            serialize: e => t.input.serialize(e),
                            deserialize: e => t.output.deserialize(e)
                        },
                        combinedTransformer: t
                    }, this.links = e.links.map(e => e(this.runtime))
                }
            };

            function createTRPCClient(e) {
                let t = new TRPCUntypedClient(e);
                return t
            }
            let v = {
                    query: "query",
                    mutate: "mutation",
                    subscribe: "subscription"
                },
                clientCallTypeToProcedureType = e => v[e];
            async function parseJSONStream(e) {
                let t = e.parse ? ? JSON.parse;
                await readLines(e.readableStream, n => {
                    if (e.signal ? .aborted || !n || "}" === n) return;
                    let i = n.indexOf(":"),
                        s = n.substring(2, i - 1),
                        o = n.substring(i + 1);
                    e.onSingle(Number(s), t(o))
                }, e.textDecoder)
            }
            async function readLines(e, t, n) {
                let i = "",
                    onChunk = e => {
                        let s = n.decode(e),
                            o = s.split("\n");
                        if (1 === o.length) i += o[0];
                        else if (o.length > 1) {
                            t(i + o[0]);
                            for (let e = 1; e < o.length - 1; e++) t(o[e]);
                            i = o[o.length - 1]
                        }
                    };
                "getReader" in e ? await readStandardChunks(e, onChunk) : await new Promise(t => {
                    e.on("data", onChunk), e.on("end", t)
                }), t(i)
            }
            async function readStandardChunks(e, t) {
                let n = e.getReader(),
                    i = await n.read();
                for (; !i.done;) t(i.value), i = await n.read()
            }
            let streamingJsonHttpRequester = (e, t) => {
                let n = e.AbortController ? new e.AbortController : null,
                    i = fetchHTTPResponse({ ...e,
                        contentTypeHeader: "application/json",
                        batchModeHeader: "stream",
                        getUrl: getUrl,
                        getBody: getBody
                    }, n),
                    s = i.then(async i => {
                        if (!i.body) throw Error("Received response without body");
                        let s = {
                            response: i
                        };
                        return parseJSONStream({
                            readableStream: i.body,
                            onSingle: t,
                            parse: e => ({
                                json: JSON.parse(e),
                                meta: s
                            }),
                            signal: n ? .signal,
                            textDecoder: e.textDecoder
                        })
                    });
                return {
                    cancel: () => n ? .abort(),
                    promise: s
                }
            };
            createHTTPBatchLink(e => {
                let t = function(e) {
                    if (e) return e;
                    if ("undefined" != typeof window && window.TextDecoder) return new window.TextDecoder;
                    if ("undefined" != typeof globalThis && globalThis.TextDecoder) return new globalThis.TextDecoder;
                    throw Error("No TextDecoder implementation found")
                }(e.opts.textDecoder);
                return (n, i) => {
                    let s = n.map(e => e.path).join(","),
                        o = n.map(e => e.input),
                        {
                            cancel: u,
                            promise: l
                        } = streamingJsonHttpRequester({ ...e,
                            textDecoder: t,
                            path: s,
                            inputs: o,
                            headers: () => e.opts.headers ? "function" == typeof e.opts.headers ? e.opts.headers({
                                opList: n
                            }) : e.opts.headers : {}
                        }, (e, t) => {
                            i(e, t)
                        });
                    return {
                        promise: l.then(() => []),
                        cancel: u
                    }
                }
            });
            let dist_getBody = e => {
                if ("input" in e) {
                    if (!(e.input instanceof FormData)) throw Error("Input is not FormData");
                    return e.input
                }
            };
            httpLinkFactory({
                requester: e => {
                    if ("mutation" !== e.type) throw Error("We only handle mutations with formdata");
                    return httpRequest({ ...e,
                        getUrl: () => `${e.url}/${e.path}`,
                        getBody: dist_getBody
                    })
                }
            });
            var _ = n(7066),
                w = n(959);

            function defaultShouldDehydrateMutation(e) {
                return e.state.isPaused
            }

            function defaultShouldDehydrateQuery(e) {
                return "success" === e.state.status
            }
            let Hydrate = ({
                children: e,
                options: t,
                state: n
            }) => (! function(e, t = {}) {
                let n = (0, _.NL)({
                        context: t.context
                    }),
                    i = w.useRef(t);
                i.current = t, w.useMemo(() => {
                    e && function(e, t, n) {
                        if ("object" != typeof t || null === t) return;
                        let i = e.getMutationCache(),
                            s = e.getQueryCache(),
                            o = t.mutations || [],
                            u = t.queries || [];
                        o.forEach(t => {
                            var s;
                            i.build(e, { ...null == n ? void 0 : null == (s = n.defaultOptions) ? void 0 : s.mutations,
                                mutationKey: t.mutationKey
                            }, t.state)
                        }), u.forEach(({
                            queryKey: t,
                            state: i,
                            queryHash: o
                        }) => {
                            var u;
                            let l = s.get(o);
                            if (l) {
                                if (l.state.dataUpdatedAt < i.dataUpdatedAt) {
                                    let {
                                        fetchStatus: e,
                                        ...t
                                    } = i;
                                    l.setState(t)
                                }
                                return
                            }
                            s.build(e, { ...null == n ? void 0 : null == (u = n.defaultOptions) ? void 0 : u.queries,
                                queryKey: t,
                                queryHash: o
                            }, { ...i,
                                fetchStatus: "idle"
                            })
                        })
                    }(n, e, i.current)
                }, [n, e])
            }(n, t), e);

            function getArrayQueryKey_86134f8b_getArrayQueryKey(e, t) {
                let n = Array.isArray(e) ? e : [e],
                    [i, s] = n,
                    o = "string" != typeof i || "" === i ? [] : i.split(".");
                return s || t && "any" !== t ? [o, { ...void 0 !== s && {
                        input: s
                    },
                    ...t && "any" !== t && {
                        type: t
                    }
                }] : o.length ? [o] : []
            }
            var S = n(8631),
                P = n(4979),
                O = n(1985),
                C = n(1933);
            let QueriesObserver = class QueriesObserver extends c.l {
                constructor(e, t) {
                    super(), this.client = e, this.queries = [], this.result = [], this.observers = [], this.observersMap = {}, t && this.setQueries(t)
                }
                onSubscribe() {
                    1 === this.listeners.size && this.observers.forEach(e => {
                        e.subscribe(t => {
                            this.onUpdate(e, t)
                        })
                    })
                }
                onUnsubscribe() {
                    this.listeners.size || this.destroy()
                }
                destroy() {
                    this.listeners = new Set, this.observers.forEach(e => {
                        e.destroy()
                    })
                }
                setQueries(e, t) {
                    this.queries = e, o.V.batch(() => {
                        let e = this.observers,
                            n = this.findMatchingObservers(this.queries);
                        n.forEach(e => e.observer.setOptions(e.defaultedQueryOptions, t));
                        let s = n.map(e => e.observer),
                            o = Object.fromEntries(s.map(e => [e.options.queryHash, e])),
                            u = s.map(e => e.getCurrentResult()),
                            l = s.some((t, n) => t !== e[n]);
                        (e.length !== s.length || l) && (this.observers = s, this.observersMap = o, this.result = u, this.hasListeners() && ((0, i.e5)(e, s).forEach(e => {
                            e.destroy()
                        }), (0, i.e5)(s, e).forEach(e => {
                            e.subscribe(t => {
                                this.onUpdate(e, t)
                            })
                        }), this.notify()))
                    })
                }
                getCurrentResult() {
                    return this.result
                }
                getQueries() {
                    return this.observers.map(e => e.getCurrentQuery())
                }
                getObservers() {
                    return this.observers
                }
                getOptimisticResult(e) {
                    return this.findMatchingObservers(e).map(e => e.observer.getOptimisticResult(e.defaultedQueryOptions))
                }
                findMatchingObservers(e) {
                    let t = this.observers,
                        n = new Map(t.map(e => [e.options.queryHash, e])),
                        i = e.map(e => this.client.defaultQueryOptions(e)),
                        s = i.flatMap(e => {
                            let t = n.get(e.queryHash);
                            return null != t ? [{
                                defaultedQueryOptions: e,
                                observer: t
                            }] : []
                        }),
                        o = new Set(s.map(e => e.defaultedQueryOptions.queryHash)),
                        u = i.filter(e => !o.has(e.queryHash)),
                        l = new Set(s.map(e => e.observer)),
                        c = t.filter(e => !l.has(e)),
                        getObserver = e => {
                            let t = this.client.defaultQueryOptions(e),
                                n = this.observersMap[t.queryHash];
                            return null != n ? n : new C.z(this.client, t)
                        },
                        f = u.map((e, t) => {
                            if (e.keepPreviousData) {
                                let n = c[t];
                                if (void 0 !== n) return {
                                    defaultedQueryOptions: e,
                                    observer: n
                                }
                            }
                            return {
                                defaultedQueryOptions: e,
                                observer: getObserver(e)
                            }
                        });
                    return s.concat(f).sort((e, t) => i.indexOf(e.defaultedQueryOptions) - i.indexOf(t.defaultedQueryOptions))
                }
                onUpdate(e, t) {
                    let n = this.observers.indexOf(e); - 1 !== n && (this.result = (0, i.Rc)(this.result, n, t), this.notify())
                }
                notify() {
                    o.V.batch(() => {
                        this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(this.result)
                        })
                    })
                }
            };
            var E = n(8292),
                R = n(5426),
                x = n(9108),
                T = n(6557),
                A = n(7602);

            function getQueryKeyInternal(e, t) {
                return e.length ? void 0 === t ? [e] : [e, t] : []
            }

            function createReactProxyDecoration(e, t) {
                return createRecursiveProxy(n => {
                    let i = n.args,
                        s = [e, ...n.path],
                        o = s.pop(),
                        u = s.join(".");
                    if ("useMutation" === o) return t[o](u, ...i);
                    let [l, ...c] = i, f = getQueryKeyInternal(u, l);
                    if ("getQueryKey" === o) return getArrayQueryKey_86134f8b_getArrayQueryKey(f, c[0] ? ? "any");
                    if ("_def" === o) return {
                        path: s
                    };
                    if (o.startsWith("useSuspense")) {
                        let e = c[0] || {},
                            n = t["useSuspenseQuery" === o ? "useQuery" : "useInfiniteQuery"](f, { ...e,
                                suspense: !0,
                                enabled: !0
                            });
                        return [n.data, n]
                    }
                    return t[o](f, ...c)
                })
            }
            let Q = ["client", "ssrContext", "ssrState", "abortOnUnmount"],
                j = (0, w.createContext)(null);

            function createReactQueryUtilsProxy(e) {
                return createFlatProxy(t => {
                    if ("client" === t) {
                        var n;
                        return n = e.client, createFlatProxy(e => n.hasOwnProperty(e) ? n[e] : "__untypedClient" === e ? n : createRecursiveProxy(({
                            path: t,
                            args: i
                        }) => {
                            let s = [e, ...t],
                                o = clientCallTypeToProcedureType(s.pop()),
                                u = s.join(".");
                            return n[o](u, ...i)
                        }))
                    }
                    return Q.includes(t) ? e[t] : createRecursiveProxy(({
                        path: n,
                        args: i
                    }) => {
                        let s = [t, ...n],
                            o = s.pop(),
                            u = s.join("."),
                            {
                                queryKey: l,
                                rest: c,
                                updater: f
                            } = (e => {
                                if (["setData", "setInfiniteData"].includes(e)) {
                                    let [e, t, ...n] = i, s = getQueryKeyInternal(u, e);
                                    return {
                                        queryKey: s,
                                        updater: t,
                                        rest: n
                                    }
                                }
                                let [t, ...n] = i, s = getQueryKeyInternal(u, t);
                                return {
                                    queryKey: s,
                                    rest: n
                                }
                            })(o);
                        return ({
                            fetch: () => e.fetchQuery(l, ...c),
                            fetchInfinite: () => e.fetchInfiniteQuery(l, ...c),
                            prefetch: () => e.prefetchQuery(l, ...c),
                            prefetchInfinite: () => e.prefetchInfiniteQuery(l, ...c),
                            ensureData: () => e.ensureQueryData(l, ...c),
                            invalidate: () => e.invalidateQueries(l, ...c),
                            reset: () => e.resetQueries(l, ...c),
                            refetch: () => e.refetchQueries(l, ...c),
                            cancel: () => e.cancelQuery(l, ...c),
                            setData: () => {
                                e.setQueryData(l, f, ...c)
                            },
                            setInfiniteData: () => {
                                e.setInfiniteQueryData(l, f, ...c)
                            },
                            getData: () => e.getQueryData(l),
                            getInfiniteData: () => e.getInfiniteQueryData(l)
                        })[o]()
                    })
                })
            }

            function getClientArgs(e, t) {
                let [n, i] = e;
                return [n, i, t ? .trpc]
            }

            function useHookResult(e) {
                let t = (0, w.useRef)(e);
                return t.current.path = e.path, t.current
            }

            function createHooksInternal_bdff7171_createHooksInternal(e) {
                return function(e) {
                    let t = (e ? .overrides ? ? e ? .unstable_overrides) ? .useMutation ? .onSuccess ? ? (e => e.originalFn()),
                        n = e ? .context ? ? j,
                        s = e ? .reactQueryContext;

                    function useContext() {
                        return w.useContext(n)
                    }

                    function useSSRQueryOptionsIfNeeded(e, t, n) {
                        let {
                            queryClient: i,
                            ssrState: s
                        } = useContext();
                        return s && "mounted" !== s && i.getQueryCache().find(getArrayQueryKey_86134f8b_getArrayQueryKey(e, t)) ? .state.status === "error" ? {
                            retryOnMount: !1,
                            ...n
                        } : n
                    }
                    return {
                        Provider: e => {
                            let {
                                abortOnUnmount: t = !1,
                                client: i,
                                queryClient: s,
                                ssrContext: o
                            } = e, [u, l] = (0, w.useState)(e.ssrState ? ? !1);
                            return (0, w.useEffect)(() => {
                                l(e => !!e && "mounted")
                            }, []), w.createElement(n.Provider, {
                                value: {
                                    abortOnUnmount: t,
                                    queryClient: s,
                                    client: i,
                                    ssrContext: o ? ? null,
                                    ssrState: u,
                                    fetchQuery: (0, w.useCallback)((e, t) => s.fetchQuery({ ...t,
                                        queryKey: getArrayQueryKey_86134f8b_getArrayQueryKey(e, "query"),
                                        queryFn: () => i.query(...getClientArgs(e, t))
                                    }), [i, s]),
                                    fetchInfiniteQuery: (0, w.useCallback)((e, t) => s.fetchInfiniteQuery({ ...t,
                                        queryKey: getArrayQueryKey_86134f8b_getArrayQueryKey(e, "infinite"),
                                        queryFn: ({
                                            pageParam: n
                                        }) => {
                                            let [s, o] = e, u = { ...o,
                                                cursor: n
                                            };
                                            return i.query(...getClientArgs([s, u], t))
                                        }
                                    }), [i, s]),
                                    prefetchQuery: (0, w.useCallback)((e, t) => s.prefetchQuery({ ...t,
                                        queryKey: getArrayQueryKey_86134f8b_getArrayQueryKey(e, "query"),
                                        queryFn: () => i.query(...getClientArgs(e, t))
                                    }), [i, s]),
                                    prefetchInfiniteQuery: (0, w.useCallback)((e, t) => s.prefetchInfiniteQuery({ ...t,
                                        queryKey: getArrayQueryKey_86134f8b_getArrayQueryKey(e, "infinite"),
                                        queryFn: ({
                                            pageParam: n
                                        }) => {
                                            let [s, o] = e, u = { ...o,
                                                cursor: n
                                            };
                                            return i.query(...getClientArgs([s, u], t))
                                        }
                                    }), [i, s]),
                                    ensureQueryData: (0, w.useCallback)((e, t) => s.ensureQueryData({ ...t,
                                        queryKey: getArrayQueryKey_86134f8b_getArrayQueryKey(e, "query"),
                                        queryFn: () => i.query(...getClientArgs(e, t))
                                    }), [i, s]),
                                    invalidateQueries: (0, w.useCallback)((e, t, n) => s.invalidateQueries({ ...t,
                                        queryKey: getArrayQueryKey_86134f8b_getArrayQueryKey(e, "any")
                                    }, n), [s]),
                                    resetQueries: (0, w.useCallback)((...e) => {
                                        let [t, n, i] = e;
                                        return s.resetQueries({ ...n,
                                            queryKey: getArrayQueryKey_86134f8b_getArrayQueryKey(t, "any")
                                        }, i)
                                    }, [s]),
                                    refetchQueries: (0, w.useCallback)((...e) => {
                                        let [t, n, i] = e;
                                        return s.refetchQueries({ ...n,
                                            queryKey: getArrayQueryKey_86134f8b_getArrayQueryKey(t, "any")
                                        }, i)
                                    }, [s]),
                                    cancelQuery: (0, w.useCallback)(e => s.cancelQueries({
                                        queryKey: getArrayQueryKey_86134f8b_getArrayQueryKey(e, "any")
                                    }), [s]),
                                    setQueryData: (0, w.useCallback)((...e) => {
                                        let [t, ...n] = e;
                                        return s.setQueryData(getArrayQueryKey_86134f8b_getArrayQueryKey(t, "query"), ...n)
                                    }, [s]),
                                    getQueryData: (0, w.useCallback)((...e) => {
                                        let [t, ...n] = e;
                                        return s.getQueryData(getArrayQueryKey_86134f8b_getArrayQueryKey(t, "query"), ...n)
                                    }, [s]),
                                    setInfiniteQueryData: (0, w.useCallback)((...e) => {
                                        let [t, ...n] = e;
                                        return s.setQueryData(getArrayQueryKey_86134f8b_getArrayQueryKey(t, "infinite"), ...n)
                                    }, [s]),
                                    getInfiniteQueryData: (0, w.useCallback)((...e) => {
                                        let [t, ...n] = e;
                                        return s.getQueryData(getArrayQueryKey_86134f8b_getArrayQueryKey(t, "infinite"), ...n)
                                    }, [s])
                                }
                            }, e.children)
                        },
                        createClient: e => createTRPCClient(e),
                        useContext,
                        useUtils: useContext,
                        useQuery: function(t, n) {
                            let i = useContext();
                            if (!i) throw Error("Unable to retrieve application context. Did you forget to wrap your App inside `withTRPC` HoC?");
                            let {
                                abortOnUnmount: o,
                                client: u,
                                ssrState: l,
                                queryClient: c,
                                prefetchQuery: f
                            } = i, h = c.getQueryDefaults(getArrayQueryKey_86134f8b_getArrayQueryKey(t, "query"));
                            "undefined" != typeof window || "prepass" !== l || n ? .trpc ? .ssr === !1 || (n ? .enabled ? ? h ? .enabled) === !1 || c.getQueryCache().find(getArrayQueryKey_86134f8b_getArrayQueryKey(t, "query")) || f(t, n);
                            let d = useSSRQueryOptionsIfNeeded(t, "query", { ...h,
                                    ...n
                                }),
                                p = n ? .trpc ? .abortOnUnmount ? ? e ? .abortOnUnmount ? ? o,
                                y = (0, S.a)({ ...d,
                                    queryKey: getArrayQueryKey_86134f8b_getArrayQueryKey(t, "query"),
                                    queryFn: e => {
                                        let n = { ...d,
                                            trpc: { ...d ? .trpc,
                                                ...p ? {
                                                    signal: e.signal
                                                } : {}
                                            }
                                        };
                                        return u.query(...getClientArgs(t, n))
                                    },
                                    context: s
                                });
                            return y.trpc = useHookResult({
                                path: t[0]
                            }), y
                        },
                        useQueries: (e, t) => {
                            let {
                                ssrState: n,
                                queryClient: i,
                                prefetchQuery: s,
                                client: u
                            } = useContext(), l = createRecursiveProxy(e => {
                                let t = e.path.join("."),
                                    [n, i] = e.args,
                                    s = getQueryKeyInternal(t, n),
                                    o = {
                                        queryKey: s,
                                        queryFn: () => u.query(t, n, i ? .trpc),
                                        ...i
                                    };
                                return o
                            }), c = e(l);
                            if ("undefined" == typeof window && "prepass" === n)
                                for (let e of c) e.trpc ? .ssr === !1 || i.getQueryCache().find(getArrayQueryKey_86134f8b_getArrayQueryKey(e.queryKey, "query")) || s(e.queryKey, e);
                            return function({
                                queries: e,
                                context: t
                            }) {
                                let n = (0, _.NL)({
                                        context: t
                                    }),
                                    i = (0, R.S)(),
                                    s = (0, x._)(),
                                    u = w.useMemo(() => e.map(e => {
                                        let t = n.defaultQueryOptions(e);
                                        return t._optimisticResults = i ? "isRestoring" : "optimistic", t
                                    }), [e, n, i]);
                                u.forEach(e => {
                                    (0, A.Fb)(e), (0, T.pf)(e, s)
                                }), (0, T.JN)(s);
                                let [l] = w.useState(() => new QueriesObserver(n, u)), c = l.getOptimisticResult(u);
                                (0, E.$)(w.useCallback(e => i ? () => void 0 : l.subscribe(o.V.batchCalls(e)), [l, i]), () => l.getCurrentResult(), () => l.getCurrentResult()), w.useEffect(() => {
                                    l.setQueries(u, {
                                        listeners: !1
                                    })
                                }, [u, l]);
                                let f = c.some((e, t) => (0, A.SB)(u[t], e, i)),
                                    h = f ? c.flatMap((e, t) => {
                                        let n = u[t],
                                            o = l.getObservers()[t];
                                        if (n && o) {
                                            if ((0, A.SB)(n, e, i)) return (0, A.j8)(n, o, s);
                                            (0, A.Z$)(e, i) && (0, A.j8)(n, o, s)
                                        }
                                        return []
                                    }) : [];
                                if (h.length > 0) throw Promise.all(h);
                                let d = l.getQueries(),
                                    p = c.find((e, t) => {
                                        var n, i;
                                        return (0, T.KJ)({
                                            result: e,
                                            errorResetBoundary: s,
                                            useErrorBoundary: null != (n = null == (i = u[t]) ? void 0 : i.useErrorBoundary) && n,
                                            query: d[t]
                                        })
                                    });
                                if (null != p && p.error) throw p.error;
                                return c
                            }({
                                queries: c.map(e => ({ ...e,
                                    queryKey: getArrayQueryKey_86134f8b_getArrayQueryKey(e.queryKey, "query")
                                })),
                                context: t
                            })
                        },
                        useMutation: function(e, n) {
                            let {
                                client: i
                            } = useContext(), o = (0, _.NL)({
                                context: s
                            }), u = Array.isArray(e) ? e[0] : e, l = o.getMutationDefaults([u.split(".")]), c = (0, P.D)({ ...n,
                                mutationKey: [u.split(".")],
                                mutationFn: e => i.mutation(...getClientArgs([u, e], n)),
                                context: s,
                                onSuccess: (...e) => t({
                                    originalFn: () => n ? .onSuccess ? .(...e) ? ? l ? .onSuccess ? .(...e),
                                    queryClient: o,
                                    meta: n ? .meta ? ? l ? .meta ? ? {}
                                })
                            });
                            return c.trpc = useHookResult({
                                path: u
                            }), c
                        },
                        useSubscription: /* istanbul ignore next -- @preserve */ function(e, t) {
                            let n = t ? .enabled ? ? !0,
                                s = (0, i.yF)(e),
                                {
                                    client: o
                                } = useContext(),
                                u = (0, w.useRef)(t);
                            u.current = t, (0, w.useEffect)(() => {
                                if (!n) return;
                                let [t, i] = e, s = !1, l = o.subscription(t, i ? ? void 0, {
                                    onStarted: () => {
                                        s || u.current.onStarted ? .()
                                    },
                                    onData: e => {
                                        s || u.current.onData(e)
                                    },
                                    onError: e => {
                                        s || u.current.onError ? .(e)
                                    }
                                });
                                return () => {
                                    s = !0, l.unsubscribe()
                                }
                            }, [s, n])
                        },
                        useDehydratedState: (e, t) => {
                            let n = (0, w.useMemo)(() => t ? e.runtime.transformer.deserialize(t) : t, [t, e]);
                            return n
                        },
                        useInfiniteQuery: function(e, t) {
                            let [n, i] = e, {
                                client: o,
                                ssrState: u,
                                prefetchInfiniteQuery: l,
                                queryClient: c,
                                abortOnUnmount: f
                            } = useContext(), h = c.getQueryDefaults(getArrayQueryKey_86134f8b_getArrayQueryKey(e, "infinite"));
                            "undefined" != typeof window || "prepass" !== u || t ? .trpc ? .ssr === !1 || (t ? .enabled ? ? h ? .enabled) === !1 || c.getQueryCache().find(getArrayQueryKey_86134f8b_getArrayQueryKey(e, "infinite")) || l(e, { ...h,
                                ...t
                            });
                            let d = useSSRQueryOptionsIfNeeded(e, "infinite", { ...h,
                                    ...t
                                }),
                                p = t ? .trpc ? .abortOnUnmount ? ? f,
                                y = (0, O.N)({ ...d,
                                    queryKey: getArrayQueryKey_86134f8b_getArrayQueryKey(e, "infinite"),
                                    queryFn: e => {
                                        let s = { ...d,
                                                trpc: { ...d ? .trpc,
                                                    ...p ? {
                                                        signal: e.signal
                                                    } : {}
                                                }
                                            },
                                            u = { ...i ? ? {},
                                                cursor : e.pageParam ? ? t ? .initialCursor
                                            };
                                        return o.query(...getClientArgs([n, u], s))
                                    },
                                    context: s
                                });
                            return y.trpc = useHookResult({
                                path: n
                            }), y
                        }
                    }
                }(e)
            }
            let getQueryClient = e => e.queryClient ? ? new QueryClient(e.queryClientConfig);

            function transformQueryOrMutationCacheErrors(e) {
                let t = e.state.error;
                if (t instanceof Error && "TRPCClientError" === t.name) {
                    let n = {
                        message: t.message,
                        data: t.data,
                        shape: t.shape
                    };
                    return { ...e,
                        state: { ...e.state,
                            error: n
                        }
                    }
                }
                return e
            }
            let DoubleIndexedKV = class DoubleIndexedKV {
                constructor() {
                    this.keyToValue = new Map, this.valueToKey = new Map
                }
                set(e, t) {
                    this.keyToValue.set(e, t), this.valueToKey.set(t, e)
                }
                getByKey(e) {
                    return this.keyToValue.get(e)
                }
                getByValue(e) {
                    return this.valueToKey.get(e)
                }
                clear() {
                    this.keyToValue.clear(), this.valueToKey.clear()
                }
            };
            let Registry = class Registry {
                constructor(e) {
                    this.generateIdentifier = e, this.kv = new DoubleIndexedKV
                }
                register(e, t) {
                    this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e))
                }
                clear() {
                    this.kv.clear()
                }
                getIdentifier(e) {
                    return this.kv.getByValue(e)
                }
                getValue(e) {
                    return this.kv.getByKey(e)
                }
            };
            let ClassRegistry = class ClassRegistry extends Registry {
                constructor() {
                    super(e => e.name), this.classToAllowedProps = new Map
                }
                register(e, t) {
                    "object" == typeof t ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t)
                }
                getAllowedProps(e) {
                    return this.classToAllowedProps.get(e)
                }
            };

            function forEach(e, t) {
                Object.entries(e).forEach(([e, n]) => t(n, e))
            }

            function includes(e, t) {
                return -1 !== e.indexOf(t)
            }

            function findArr(e, t) {
                for (let n = 0; n < e.length; n++) {
                    let i = e[n];
                    if (t(i)) return i
                }
            }
            let CustomTransformerRegistry = class CustomTransformerRegistry {
                constructor() {
                    this.transfomers = {}
                }
                register(e) {
                    this.transfomers[e.name] = e
                }
                findApplicable(e) {
                    return function(e, t) {
                        let n = function(e) {
                            if ("values" in Object) return Object.values(e);
                            let t = [];
                            for (let n in e) e.hasOwnProperty(n) && t.push(e[n]);
                            return t
                        }(e);
                        if ("find" in n) return n.find(t);
                        for (let e = 0; e < n.length; e++) {
                            let i = n[e];
                            if (t(i)) return i
                        }
                    }(this.transfomers, t => t.isApplicable(e))
                }
                findByName(e) {
                    return this.transfomers[e]
                }
            };
            let getType = e => Object.prototype.toString.call(e).slice(8, -1),
                isUndefined = e => void 0 === e,
                isNull = e => null === e,
                isPlainObject = e => "object" == typeof e && null !== e && e !== Object.prototype && (null === Object.getPrototypeOf(e) || Object.getPrototypeOf(e) === Object.prototype),
                isEmptyObject = e => isPlainObject(e) && 0 === Object.keys(e).length,
                isArray = e => Array.isArray(e),
                isString = e => "string" == typeof e,
                isNumber = e => "number" == typeof e && !isNaN(e),
                isBoolean = e => "boolean" == typeof e,
                isMap = e => e instanceof Map,
                isSet = e => e instanceof Set,
                isSymbol = e => "Symbol" === getType(e),
                isNaNValue = e => "number" == typeof e && isNaN(e),
                isPrimitive = e => isBoolean(e) || isNull(e) || isUndefined(e) || isNumber(e) || isString(e) || isSymbol(e),
                isInfinite = e => e === 1 / 0 || e === -1 / 0,
                escapeKey = e => e.replace(/\./g, "\\."),
                stringifyPath = e => e.map(String).map(escapeKey).join("."),
                parsePath = e => {
                    let t = [],
                        n = "";
                    for (let i = 0; i < e.length; i++) {
                        let s = e.charAt(i),
                            o = "\\" === s && "." === e.charAt(i + 1);
                        if (o) {
                            n += ".", i++;
                            continue
                        }
                        let u = "." === s;
                        if (u) {
                            t.push(n), n = "";
                            continue
                        }
                        n += s
                    }
                    let i = n;
                    return t.push(i), t
                };

            function simpleTransformation(e, t, n, i) {
                return {
                    isApplicable: e,
                    annotation: t,
                    transform: n,
                    untransform: i
                }
            }
            let D = [simpleTransformation(isUndefined, "undefined", () => null, () => void 0), simpleTransformation(e => "bigint" == typeof e, "bigint", e => e.toString(), e => "undefined" != typeof BigInt ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)), simpleTransformation(e => e instanceof Date && !isNaN(e.valueOf()), "Date", e => e.toISOString(), e => new Date(e)), simpleTransformation(e => e instanceof Error, "Error", (e, t) => {
                let n = {
                    name: e.name,
                    message: e.message
                };
                return t.allowedErrorProps.forEach(t => {
                    n[t] = e[t]
                }), n
            }, (e, t) => {
                let n = Error(e.message);
                return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach(t => {
                    n[t] = e[t]
                }), n
            }), simpleTransformation(e => e instanceof RegExp, "regexp", e => "" + e, e => {
                let t = e.slice(1, e.lastIndexOf("/")),
                    n = e.slice(e.lastIndexOf("/") + 1);
                return new RegExp(t, n)
            }), simpleTransformation(isSet, "set", e => [...e.values()], e => new Set(e)), simpleTransformation(isMap, "map", e => [...e.entries()], e => new Map(e)), simpleTransformation(e => isNaNValue(e) || isInfinite(e), "number", e => isNaNValue(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number), simpleTransformation(e => 0 === e && 1 / e == -1 / 0, "number", () => "-0", Number), simpleTransformation(e => e instanceof URL, "URL", e => e.toString(), e => new URL(e))];

            function compositeTransformation(e, t, n, i) {
                return {
                    isApplicable: e,
                    annotation: t,
                    transform: n,
                    untransform: i
                }
            }
            let M = compositeTransformation((e, t) => {
                    if (isSymbol(e)) {
                        let n = !!t.symbolRegistry.getIdentifier(e);
                        return n
                    }
                    return !1
                }, (e, t) => {
                    let n = t.symbolRegistry.getIdentifier(e);
                    return ["symbol", n]
                }, e => e.description, (e, t, n) => {
                    let i = n.symbolRegistry.getValue(t[1]);
                    if (!i) throw Error("Trying to deserialize unknown symbol");
                    return i
                }),
                k = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, Uint8ClampedArray].reduce((e, t) => (e[t.name] = t, e), {}),
                I = compositeTransformation(e => ArrayBuffer.isView(e) && !(e instanceof DataView), e => ["typed-array", e.constructor.name], e => [...e], (e, t) => {
                    let n = k[t[1]];
                    if (!n) throw Error("Trying to deserialize unknown typed array");
                    return new n(e)
                });

            function isInstanceOfRegisteredClass(e, t) {
                if (e ? .constructor) {
                    let n = !!t.classRegistry.getIdentifier(e.constructor);
                    return n
                }
                return !1
            }
            let q = compositeTransformation(isInstanceOfRegisteredClass, (e, t) => {
                    let n = t.classRegistry.getIdentifier(e.constructor);
                    return ["class", n]
                }, (e, t) => {
                    let n = t.classRegistry.getAllowedProps(e.constructor);
                    if (!n) return { ...e
                    };
                    let i = {};
                    return n.forEach(t => {
                        i[t] = e[t]
                    }), i
                }, (e, t, n) => {
                    let i = n.classRegistry.getValue(t[1]);
                    if (!i) throw Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
                    return Object.assign(Object.create(i.prototype), e)
                }),
                N = compositeTransformation((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => {
                    let n = t.customTransformerRegistry.findApplicable(e);
                    return ["custom", n.name]
                }, (e, t) => {
                    let n = t.customTransformerRegistry.findApplicable(e);
                    return n.serialize(e)
                }, (e, t, n) => {
                    let i = n.customTransformerRegistry.findByName(t[1]);
                    if (!i) throw Error("Trying to deserialize unknown custom value");
                    return i.deserialize(e)
                }),
                F = [q, M, N, I],
                transformValue = (e, t) => {
                    let n = findArr(F, n => n.isApplicable(e, t));
                    if (n) return {
                        value: n.transform(e, t),
                        type: n.annotation(e, t)
                    };
                    let i = findArr(D, n => n.isApplicable(e, t));
                    if (i) return {
                        value: i.transform(e, t),
                        type: i.annotation
                    }
                },
                K = {};
            D.forEach(e => {
                K[e.annotation] = e
            });
            let untransformValue = (e, t, n) => {
                    if (isArray(t)) switch (t[0]) {
                        case "symbol":
                            return M.untransform(e, t, n);
                        case "class":
                            return q.untransform(e, t, n);
                        case "custom":
                            return N.untransform(e, t, n);
                        case "typed-array":
                            return I.untransform(e, t, n);
                        default:
                            throw Error("Unknown transformation: " + t)
                    } else {
                        let i = K[t];
                        if (!i) throw Error("Unknown transformation: " + t);
                        return i.untransform(e, n)
                    }
                },
                getNthKey = (e, t) => {
                    let n = e.keys();
                    for (; t > 0;) n.next(), t--;
                    return n.next().value
                };

            function validatePath(e) {
                if (includes(e, "__proto__")) throw Error("__proto__ is not allowed as a property");
                if (includes(e, "prototype")) throw Error("prototype is not allowed as a property");
                if (includes(e, "constructor")) throw Error("constructor is not allowed as a property")
            }
            let getDeep = (e, t) => {
                    validatePath(t);
                    for (let n = 0; n < t.length; n++) {
                        let i = t[n];
                        if (isSet(e)) e = getNthKey(e, +i);
                        else if (isMap(e)) {
                            let s = +i,
                                o = 0 == +t[++n] ? "key" : "value",
                                u = getNthKey(e, s);
                            switch (o) {
                                case "key":
                                    e = u;
                                    break;
                                case "value":
                                    e = e.get(u)
                            }
                        } else e = e[i]
                    }
                    return e
                },
                setDeep = (e, t, n) => {
                    if (validatePath(t), 0 === t.length) return n(e);
                    let i = e;
                    for (let e = 0; e < t.length - 1; e++) {
                        let n = t[e];
                        if (isArray(i)) {
                            let e = +n;
                            i = i[e]
                        } else if (isPlainObject(i)) i = i[n];
                        else if (isSet(i)) {
                            let e = +n;
                            i = getNthKey(i, e)
                        } else if (isMap(i)) {
                            let s = e === t.length - 2;
                            if (s) break;
                            let o = +n,
                                u = 0 == +t[++e] ? "key" : "value",
                                l = getNthKey(i, o);
                            switch (u) {
                                case "key":
                                    i = l;
                                    break;
                                case "value":
                                    i = i.get(l)
                            }
                        }
                    }
                    let s = t[t.length - 1];
                    if (isArray(i) ? i[+s] = n(i[+s]) : isPlainObject(i) && (i[s] = n(i[s])), isSet(i)) {
                        let e = getNthKey(i, +s),
                            t = n(e);
                        e !== t && (i.delete(e), i.add(t))
                    }
                    if (isMap(i)) {
                        let e = +t[t.length - 2],
                            o = getNthKey(i, e),
                            u = 0 == +s ? "key" : "value";
                        switch (u) {
                            case "key":
                                {
                                    let e = n(o);i.set(e, i.get(o)),
                                    e !== o && i.delete(o);
                                    break
                                }
                            case "value":
                                i.set(o, n(i.get(o)))
                        }
                    }
                    return e
                },
                isDeep = (e, t) => isPlainObject(e) || isArray(e) || isMap(e) || isSet(e) || isInstanceOfRegisteredClass(e, t),
                walker = (e, t, n, i, s = [], o = [], u = new Map) => {
                    let l = isPrimitive(e);
                    if (!l) {
                        ! function(e, t, n) {
                            let i = n.get(e);
                            i ? i.push(t) : n.set(e, [t])
                        }(e, s, t);
                        let n = u.get(e);
                        if (n) return i ? {
                            transformedValue: null
                        } : n
                    }
                    if (!isDeep(e, n)) {
                        let t = transformValue(e, n),
                            i = t ? {
                                transformedValue: t.value,
                                annotations: [t.type]
                            } : {
                                transformedValue: e
                            };
                        return l || u.set(e, i), i
                    }
                    if (includes(o, e)) return {
                        transformedValue: null
                    };
                    let c = transformValue(e, n),
                        f = c ? .value ? ? e,
                        h = isArray(f) ? [] : {},
                        d = {};
                    forEach(f, (l, c) => {
                        if ("__proto__" === c || "constructor" === c || "prototype" === c) throw Error(`Detected property ${c}. This is a prototype pollution risk, please remove it from your object.`);
                        let f = walker(l, t, n, i, [...s, c], [...o, e], u);
                        h[c] = f.transformedValue, isArray(f.annotations) ? d[c] = f.annotations : isPlainObject(f.annotations) && forEach(f.annotations, (e, t) => {
                            d[escapeKey(c) + "." + t] = e
                        })
                    });
                    let p = isEmptyObject(d) ? {
                        transformedValue: h,
                        annotations: c ? [c.type] : void 0
                    } : {
                        transformedValue: h,
                        annotations: c ? [c.type, d] : d
                    };
                    return l || u.set(e, p), p
                };

            function dist_getType(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            }

            function dist_isArray(e) {
                return "Array" === dist_getType(e)
            }
            let SuperJSON = class SuperJSON {
                constructor({
                    dedupe: e = !1
                } = {}) {
                    this.classRegistry = new ClassRegistry, this.symbolRegistry = new Registry(e => e.description ? ? ""), this.customTransformerRegistry = new CustomTransformerRegistry, this.allowedErrorProps = [], this.dedupe = e
                }
                serialize(e) {
                    let t = new Map,
                        n = walker(e, t, this, this.dedupe),
                        i = {
                            json: n.transformedValue
                        };
                    n.annotations && (i.meta = { ...i.meta,
                        values: n.annotations
                    });
                    let s = function(e, t) {
                        let n;
                        let i = {};
                        return (e.forEach(e => {
                            if (e.length <= 1) return;
                            t || (e = e.map(e => e.map(String)).sort((e, t) => e.length - t.length));
                            let [s, ...o] = e;
                            0 === s.length ? n = o.map(stringifyPath) : i[stringifyPath(s)] = o.map(stringifyPath)
                        }), n) ? isEmptyObject(i) ? [n] : [n, i] : isEmptyObject(i) ? void 0 : i
                    }(t, this.dedupe);
                    return s && (i.meta = { ...i.meta,
                        referentialEqualities: s
                    }), i
                }
                deserialize(e) {
                    let {
                        json: t,
                        meta: n
                    } = e, i = function copy(e, t = {}) {
                        if (dist_isArray(e)) return e.map(e => copy(e, t));
                        if (! function(e) {
                                if ("Object" !== dist_getType(e)) return !1;
                                let t = Object.getPrototypeOf(e);
                                return !!t && t.constructor === Object && t === Object.prototype
                            }(e)) return e;
                        let n = Object.getOwnPropertyNames(e),
                            i = Object.getOwnPropertySymbols(e);
                        return [...n, ...i].reduce((n, i) => {
                            if (dist_isArray(t.props) && !t.props.includes(i)) return n;
                            let s = e[i],
                                o = copy(s, t);
                            return ! function(e, t, n, i, s) {
                                let o = ({}).propertyIsEnumerable.call(i, t) ? "enumerable" : "nonenumerable";
                                "enumerable" === o && (e[t] = n), s && "nonenumerable" === o && Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                })
                            }(n, i, o, e, t.nonenumerable), n
                        }, {})
                    }(t);
                    if (n ? .values) {
                        var s, o, u;
                        s = i, o = n.values, u = this,
                            function traverse(e, t, n = []) {
                                if (!e) return;
                                if (!isArray(e)) {
                                    forEach(e, (e, i) => traverse(e, t, [...n, ...parsePath(i)]));
                                    return
                                }
                                let [i, s] = e;
                                s && forEach(s, (e, i) => {
                                    traverse(e, t, [...n, ...parsePath(i)])
                                }), t(i, n)
                            }(o, (e, t) => {
                                s = setDeep(s, t, t => untransformValue(t, e, u))
                            }), i = s
                    }
                    return n ? .referentialEqualities && (i = function(e, t) {
                        function apply(t, n) {
                            let i = getDeep(e, parsePath(n));
                            t.map(parsePath).forEach(t => {
                                e = setDeep(e, t, () => i)
                            })
                        }
                        if (isArray(t)) {
                            let [n, i] = t;
                            n.forEach(t => {
                                e = setDeep(e, parsePath(t), () => e)
                            }), i && forEach(i, apply)
                        } else forEach(t, apply);
                        return e
                    }(i, n.referentialEqualities)), i
                }
                stringify(e) {
                    return JSON.stringify(this.serialize(e))
                }
                parse(e) {
                    return this.deserialize(JSON.parse(e))
                }
                registerClass(e, t) {
                    this.classRegistry.register(e, t)
                }
                registerSymbol(e, t) {
                    this.symbolRegistry.register(e, t)
                }
                registerCustom(e, t) {
                    this.customTransformerRegistry.register({
                        name: t,
                        ...e
                    })
                }
                allowErrorProps(...e) {
                    this.allowedErrorProps.push(...e)
                }
            };
            SuperJSON.defaultInstance = new SuperJSON, SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance), SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance), SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance), SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance), SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance), SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance), SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance), SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance), SuperJSON.serialize, SuperJSON.deserialize, SuperJSON.stringify, SuperJSON.parse, SuperJSON.registerClass, SuperJSON.registerCustom, SuperJSON.registerSymbol, SuperJSON.allowErrorProps;
            let U = new QueryClient({
                    defaultOptions: {
                        queries: {
                            refetchOnWindowFocus: !1
                        }
                    }
                }),
                z = /* istanbul ignore file -- @preserve */ function(e) {
                    let t = createHooksInternal_bdff7171_createHooksInternal(e),
                        i = function(e) {
                            let {
                                config: t
                            } = e;
                            return i => {
                                let s = function(e) {
                                        let t = createHooksInternal_bdff7171_createHooksInternal(e),
                                            n = createFlatProxy(e => "useContext" === e || "useUtils" === e ? () => {
                                                let e = t.useUtils();
                                                return (0, w.useMemo)(() => createReactQueryUtilsProxy(e), [e])
                                            } : t.hasOwnProperty(e) ? t[e] : createReactProxyDecoration(e, t));
                                        return { ...t,
                                            proxy: n
                                        }
                                    }(e),
                                    WithTRPC = n => {
                                        let [o] = (0, w.useState)(() => {
                                            if (n.trpc) return n.trpc;
                                            let i = t({}),
                                                o = getQueryClient(i),
                                                u = s.createClient(i);
                                            return {
                                                abortOnUnmount: i.abortOnUnmount,
                                                queryClient: o,
                                                trpcClient: u,
                                                ssrState: !!e.ssr && "mounting",
                                                ssrContext: null
                                            }
                                        }), {
                                            queryClient: u,
                                            trpcClient: l,
                                            ssrState: c,
                                            ssrContext: f
                                        } = o, h = s.useDehydratedState(l, n.pageProps ? .trpcState);
                                        return w.createElement(s.Provider, {
                                            abortOnUnmount: o.abortOnUnmount ? ? !1,
                                            client: l,
                                            queryClient: u,
                                            ssrState: c,
                                            ssrContext: f
                                        }, w.createElement(_.aH, {
                                            client: u
                                        }, w.createElement(Hydrate, {
                                            state: h
                                        }, w.createElement(i, Object.assign({}, n)))))
                                    };
                                (i.getInitialProps ? ? e.ssr) && (WithTRPC.getInitialProps = async s => {
                                    let shouldSsr = async () => {
                                            if ("function" == typeof e.ssr) {
                                                if ("undefined" != typeof window) return !1;
                                                try {
                                                    return await e.ssr({
                                                        ctx: s.ctx
                                                    })
                                                } catch (e) {
                                                    return !1
                                                }
                                            }
                                            return e.ssr
                                        },
                                        o = await shouldSsr(),
                                        u = s.AppTree,
                                        l = !!s.Component,
                                        c = l ? s.ctx : s,
                                        f = {};
                                    if (i.getInitialProps) {
                                        let e = await i.getInitialProps(s),
                                            t = l ? e.pageProps ? ? {} : e;
                                        f = { ...t,
                                            ...f
                                        }
                                    }
                                    let getAppTreeProps = e => l ? {
                                        pageProps: e
                                    } : e;
                                    if ("undefined" != typeof window || !o) return getAppTreeProps(f);
                                    let h = t({
                                            ctx: c
                                        }),
                                        d = createTRPCClient(h),
                                        p = getQueryClient(h),
                                        y = {
                                            pageProps: f,
                                            trpc: {
                                                config: h,
                                                trpcClient: d,
                                                queryClient: p,
                                                ssrState: "prepass",
                                                ssrContext: c
                                            }
                                        },
                                        m = await n.e(774).then(n.t.bind(n, 9995, 19));
                                    for (; m.renderToString((0, w.createElement)(u, y)), p.isFetching();) await new Promise(e => {
                                        let t = p.getQueryCache().subscribe(n => {
                                            n ? .query.getObserversCount() === 0 && (e(), t())
                                        })
                                    });
                                    let g = function(e, t = {}) {
                                            let n = [],
                                                i = [];
                                            if (!1 !== t.dehydrateMutations) {
                                                let i = t.shouldDehydrateMutation || defaultShouldDehydrateMutation;
                                                e.getMutationCache().getAll().forEach(e => {
                                                    i(e) && n.push({
                                                        mutationKey: e.options.mutationKey,
                                                        state: e.state
                                                    })
                                                })
                                            }
                                            if (!1 !== t.dehydrateQueries) {
                                                let n = t.shouldDehydrateQuery || defaultShouldDehydrateQuery;
                                                e.getQueryCache().getAll().forEach(e => {
                                                    n(e) && i.push({
                                                        state: e.state,
                                                        queryKey: e.queryKey,
                                                        queryHash: e.queryHash
                                                    })
                                                })
                                            }
                                            return {
                                                mutations: n,
                                                queries: i
                                            }
                                        }(p, {
                                            shouldDehydrateQuery(e) {
                                                let t = "idle" === e.state.fetchStatus && "loading" === e.state.status;
                                                return !t
                                            }
                                        }),
                                        b = { ...g,
                                            queries: g.queries.map(transformQueryOrMutationCacheErrors),
                                            mutations: g.mutations.map(transformQueryOrMutationCacheErrors)
                                        };
                                    f.trpcState = d.runtime.combinedTransformer.output.serialize(b);
                                    let v = getAppTreeProps(f);
                                    if ("responseMeta" in e) {
                                        let t = e.responseMeta ? .({
                                            ctx: c,
                                            clientErrors: [...g.queries, ...g.mutations].map(e => e.state.error).flatMap(e => e instanceof Error && "TRPCClientError" === e.name ? [e] : [])
                                        }) ? ? {};
                                        for (let [e, n] of Object.entries(t.headers ? ? {})) "string" == typeof n && c.res ? .setHeader(e, n);
                                        t.status && c.res && (c.res.statusCode = t.status)
                                    }
                                    return v
                                });
                                let o = i.displayName ? ? i.name ? ? "Component";
                                return WithTRPC.displayName = `withTRPC(${o})`, WithTRPC
                            }
                        }(e);
                    return createFlatProxy(e => "useContext" === e || "useUtils" === e ? () => {
                        let e = t.useUtils();
                        return (0, w.useMemo)(() => createReactQueryUtilsProxy(e), [e])
                    } : "useQueries" === e ? t.useQueries : "withTRPC" === e ? i : createReactProxyDecoration(e, t))
                }({
                    config: () => ({
                        transformer: SuperJSON,
                        queryClient: U,
                        links: [function(e = {}) {
                            let {
                                enabled: t = () => !0
                            } = e, n = e.colorMode ? ? ("undefined" == typeof window ? "ansi" : "css"), {
                                logger: i = defaultLogger({
                                    c: e.console,
                                    colorMode: n
                                })
                            } = e;
                            return () => ({
                                op: e,
                                next: n
                            }) => observable_ade1bad8_observable(s => {
                                var o;
                                t({ ...e,
                                    direction: "up"
                                }) && i({ ...e,
                                    direction: "up"
                                });
                                let u = Date.now();

                                function logResult(n) {
                                    let s = Date.now() - u;
                                    t({ ...e,
                                        direction: "down",
                                        result: n
                                    }) && i({ ...e,
                                        direction: "down",
                                        elapsedMs: s,
                                        result: n
                                    })
                                }
                                return n(e).pipe((o = {
                                    next(e) {
                                        logResult(e)
                                    },
                                    error(e) {
                                        logResult(e)
                                    }
                                }, e => ({
                                    subscribe: t => e.subscribe({
                                        next(e) {
                                            o.next ? .(e), t.next ? .(e)
                                        },
                                        error(e) {
                                            o.error ? .(e), t.error ? .(e)
                                        },
                                        complete() {
                                            o.complete ? .(), t.complete ? .()
                                        }
                                    })
                                }))).subscribe(s)
                            })
                        }({
                            enabled: e => "down" === e.direction && e.result instanceof Error
                        }), g({
                            url: "".concat("https://embed.pickaxeproject.com", "/axe/api/trpc")
                        })]
                    }),
                    ssr: !1
                })
        },
        3119: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var i = n(1527),
                s = n(7457),
                o = n(7066);
            let ReactQueryDevtools = function() {
                return null
            };
            var u = n(5238),
                l = n.n(u)(),
                c = n(9633),
                f = n(1349);
            let h = (0, f.xC)({
                reducer: {
                    core: c.fr.reducer
                },
                middleware: e => e({
                    serializableCheck: !1
                })
            });
            var d = n(3812),
                p = n(5147);
            n(1695);
            var y = d.S.withTRPC(e => {
                let {
                    Component: t,
                    pageProps: n
                } = e;
                return (0, i.jsx)(o.aH, {
                    client: d.E,
                    children: (0, i.jsxs)(s.zt, {
                        store: h,
                        children: [(0, i.jsx)(p.Wi, {
                            trackPageViews: !0
                        }), (0, i.jsx)("div", {
                            className: l.className,
                            children: (0, i.jsx)(t, { ...n
                            })
                        }), (0, i.jsx)(ReactQueryDevtools, {
                            initialIsOpen: !1
                        })]
                    })
                })
            })
        },
        1695: function() {},
        5238: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__font_a5a0c6', '__font_Fallback_a5a0c6'"
                },
                className: "__className_a5a0c6"
            }
        },
        1818: function(e) {
            ! function() {
                var t = {
                        229: function(e) {
                            var t, n, i, s = e.exports = {};

                            function defaultSetTimout() {
                                throw Error("setTimeout has not been defined")
                            }

                            function defaultClearTimeout() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function runTimeout(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === defaultSetTimout || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                                try {
                                    return t(e, 0)
                                } catch (n) {
                                    try {
                                        return t.call(null, e, 0)
                                    } catch (n) {
                                        return t.call(this, e, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    t = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
                                } catch (e) {
                                    t = defaultSetTimout
                                }
                                try {
                                    n = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
                                } catch (e) {
                                    n = defaultClearTimeout
                                }
                            }();
                            var o = [],
                                u = !1,
                                l = -1;

                            function cleanUpNextTick() {
                                u && i && (u = !1, i.length ? o = i.concat(o) : l = -1, o.length && drainQueue())
                            }

                            function drainQueue() {
                                if (!u) {
                                    var e = runTimeout(cleanUpNextTick);
                                    u = !0;
                                    for (var t = o.length; t;) {
                                        for (i = o, o = []; ++l < t;) i && i[l].run();
                                        l = -1, t = o.length
                                    }
                                    i = null, u = !1,
                                        function(e) {
                                            if (n === clearTimeout) return clearTimeout(e);
                                            if ((n === defaultClearTimeout || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                            try {
                                                n(e)
                                            } catch (t) {
                                                try {
                                                    return n.call(null, e)
                                                } catch (t) {
                                                    return n.call(this, e)
                                                }
                                            }
                                        }(e)
                                }
                            }

                            function Item(e, t) {
                                this.fun = e, this.array = t
                            }

                            function noop() {}
                            s.nextTick = function(e) {
                                var t = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                o.push(new Item(e, t)), 1 !== o.length || u || runTimeout(drainQueue)
                            }, Item.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = noop, s.addListener = noop, s.once = noop, s.off = noop, s.removeListener = noop, s.removeAllListeners = noop, s.emit = noop, s.prependListener = noop, s.prependOnceListener = noop, s.listeners = function(e) {
                                return []
                            }, s.binding = function(e) {
                                throw Error("process.binding is not supported")
                            }, s.cwd = function() {
                                return "/"
                            }, s.chdir = function(e) {
                                throw Error("process.chdir is not supported")
                            }, s.umask = function() {
                                return 0
                            }
                        }
                    },
                    n = {};

                function __nccwpck_require__(e) {
                    var i = n[e];
                    if (void 0 !== i) return i.exports;
                    var s = n[e] = {
                            exports: {}
                        },
                        o = !0;
                    try {
                        t[e](s, s.exports, __nccwpck_require__), o = !1
                    } finally {
                        o && delete n[e]
                    }
                    return s.exports
                }
                __nccwpck_require__.ab = "//";
                var i = __nccwpck_require__(229);
                e.exports = i
            }()
        },
        623: function(e, t, n) {
            e.exports = n(7960)
        },
        1271: function(e, t, n) {
            e.exports = n(3323)
        },
        7450: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GoogleAnalytics = void 0;
            let i = n(9938),
                s = i.__importDefault(n(959)),
                o = i.__importDefault(n(1271)),
                u = n(9023);
            t.GoogleAnalytics = function({
                debugMode: e = !1,
                gaMeasurementId: t,
                gtagUrl: n = "https://www.googletagmanager.com/gtag/js",
                strategy: i = "afterInteractive",
                defaultConsent: l = "granted",
                trackPageViews: c,
                nonce: f
            }) {
                let h = "G-9B0HEZ8D8G";
                return ((0, u.usePageViews)({
                    gaMeasurementId: h,
                    ignoreHashChange: "object" == typeof c && (null == c ? void 0 : c.ignoreHashChange),
                    disabled: !c
                }), h) ? s.default.createElement(s.default.Fragment, null, s.default.createElement(o.default, {
                    src: `${n}?id=${h}`,
                    strategy: i
                }), s.default.createElement(o.default, {
                    id: "nextjs-google-analytics",
                    nonce: f
                }, `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${"denied"===l&&`gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });`}
            gtag('config', '${h}', {
              page_path: window.location.pathname,
              ${e?`debug_mode: ${e},`:""}
            });
          `)) : null
            }
        },
        156: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GoogleAnalytics = void 0;
            var i = n(7450);
            Object.defineProperty(t, "GoogleAnalytics", {
                enumerable: !0,
                get: function() {
                    return i.GoogleAnalytics
                }
            })
        },
        9023: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.usePageViews = t.usePagesViews = void 0;
            var i = n(180);
            Object.defineProperty(t, "usePagesViews", {
                enumerable: !0,
                get: function() {
                    return i.usePagesViews
                }
            });
            var s = n(3211);
            Object.defineProperty(t, "usePageViews", {
                enumerable: !0,
                get: function() {
                    return s.usePageViews
                }
            })
        },
        3211: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.usePageViews = void 0;
            let i = n(959),
                s = n(623),
                o = n(4097);
            t.usePageViews = function({
                gaMeasurementId: e,
                ignoreHashChange: t,
                disabled: n
            } = {}) {
                (0, i.useEffect)(() => {
                    if (n) return;
                    let handleRouteChange = e => {
                        (0, o.pageView)({
                            path: e.toString()
                        }, "G-9B0HEZ8D8G")
                    };
                    return s.Router.events.on("routeChangeComplete", handleRouteChange), t || s.Router.events.on("hashChangeComplete", handleRouteChange), () => {
                        s.Router.events.off("routeChangeComplete", handleRouteChange), t || s.Router.events.off("hashChangeComplete", handleRouteChange)
                    }
                }, [s.Router.events, e, t])
            }
        },
        180: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.usePagesViews = void 0;
            let i = n(3211);
            t.usePagesViews = function(e) {
                console.warn("Nextjs Google Analytics: The 'usePagesViews' hook is deprecated. Please use 'usePageViews' hook instead. https://github.com/MauricioRobayo/nextjs-google-analytics#readme"), (0, i.usePageViews)(e)
            }
        },
        5147: function(e, t, n) {
            "use strict";
            t.Wi = void 0;
            var i = n(156);
            Object.defineProperty(t, "Wi", {
                enumerable: !0,
                get: function() {
                    return i.GoogleAnalytics
                }
            }), n(9023), n(4097)
        },
        7884: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.consent = void 0, t.consent = function({
                arg: e,
                params: t
            }) {
                window.gtag && window.gtag("consent", e, t)
            }
        },
        5567: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.event = void 0;
            let i = n(9938);
            t.event = function(e, t = {}) {
                var {
                    category: n,
                    label: s,
                    value: o,
                    nonInteraction: u,
                    userId: l
                } = t, c = i.__rest(t, ["category", "label", "value", "nonInteraction", "userId"]);
                if (!window.gtag) return;
                let f = Object.assign({}, c);
                void 0 !== n && (f.event_category = n), void 0 !== s && (f.event_label = s), void 0 !== o && (f.value = o), void 0 !== u && (f.non_interaction = u), void 0 !== l && (f.user_id = l), window.gtag("event", e, f)
            }
        },
        4097: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.consent = t.event = t.pageView = void 0;
            var i = n(5875);
            Object.defineProperty(t, "pageView", {
                enumerable: !0,
                get: function() {
                    return i.pageView
                }
            });
            var s = n(5567);
            Object.defineProperty(t, "event", {
                enumerable: !0,
                get: function() {
                    return s.event
                }
            });
            var o = n(7884);
            Object.defineProperty(t, "consent", {
                enumerable: !0,
                get: function() {
                    return o.consent
                }
            })
        },
        5875: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pageView = void 0, t.pageView = function({
                title: e,
                location: t,
                path: n,
                sendPageView: i,
                userId: s
            } = {}, o) {
                let u = "G-9B0HEZ8D8G";
                if (!u || !window.gtag) return;
                let l = {};
                void 0 !== e && (l.page_title = e), void 0 !== t && (l.page_location = t), void 0 !== n && (l.page_path = n), void 0 !== i && (l.send_page_view = i), void 0 !== s && (l.user_id = s), window.gtag("config", u, l)
            }
        },
        2415: function(e, t, n) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var i = n(959),
                s = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                o = i.useState,
                u = i.useEffect,
                l = i.useLayoutEffect,
                c = i.useDebugValue;

            function r(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !s(e, n)
                } catch (e) {
                    return !0
                }
            }
            var f = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var n = t(),
                    i = o({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    s = i[0].inst,
                    f = i[1];
                return l(function() {
                    s.value = n, s.getSnapshot = t, r(s) && f({
                        inst: s
                    })
                }, [e, n, t]), u(function() {
                    return r(s) && f({
                        inst: s
                    }), e(function() {
                        r(s) && f({
                            inst: s
                        })
                    })
                }, [e]), c(n), n
            };
            t.useSyncExternalStore = void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : f
        },
        9177: function(e, t, n) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var i = n(959),
                s = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                o = i.useSyncExternalStore,
                u = i.useRef,
                l = i.useEffect,
                c = i.useMemo,
                f = i.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, n, i, h) {
                var d = u(null);
                if (null === d.current) {
                    var p = {
                        hasValue: !1,
                        value: null
                    };
                    d.current = p
                } else p = d.current;
                var y = o(e, (d = c(function() {
                    function a(t) {
                        if (!u) {
                            if (u = !0, e = t, t = i(t), void 0 !== h && p.hasValue) {
                                var n = p.value;
                                if (h(n, t)) return o = n
                            }
                            return o = t
                        }
                        if (n = o, s(e, t)) return n;
                        var l = i(t);
                        return void 0 !== h && h(n, l) ? n : (e = t, o = l)
                    }
                    var e, o, u = !1,
                        l = void 0 === n ? null : n;
                    return [function() {
                        return a(t())
                    }, null === l ? void 0 : function() {
                        return a(l())
                    }]
                }, [t, n, i, h]))[0], d[1]);
                return l(function() {
                    p.hasValue = !0, p.value = y
                }, [y]), f(y), y
            }
        },
        4322: function(e, t, n) {
            "use strict";
            e.exports = n(2415)
        },
        6032: function(e, t, n) {
            "use strict";
            e.exports = n(9177)
        },
        1349: function(e, t, n) {
            "use strict";
            n.d(t, {
                xC: function() {
                    return configureStore
                },
                oM: function() {
                    return I
                }
            });
            var i, s, o = Symbol.for("immer-nothing"),
                u = Symbol.for("immer-draftable"),
                l = Symbol.for("immer-state");

            function die(e, ...t) {
                throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
            }
            var c = Object.getPrototypeOf;

            function isDraft(e) {
                return !!e && !!e[l]
            }

            function isDraftable(e) {
                return !!e && (immer_isPlainObject(e) || Array.isArray(e) || !!e[u] || !!e.constructor ? .[u] || isMap(e) || isSet(e))
            }
            var f = Object.prototype.constructor.toString();

            function immer_isPlainObject(e) {
                if (!e || "object" != typeof e) return !1;
                let t = c(e);
                if (null === t) return !0;
                let n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                return n === Object || "function" == typeof n && Function.toString.call(n) === f
            }

            function each(e, t) {
                0 === getArchtype(e) ? Reflect.ownKeys(e).forEach(n => {
                    t(n, e[n], e)
                }) : e.forEach((n, i) => t(i, n, e))
            }

            function getArchtype(e) {
                let t = e[l];
                return t ? t.type_ : Array.isArray(e) ? 1 : isMap(e) ? 2 : isSet(e) ? 3 : 0
            }

            function has(e, t) {
                return 2 === getArchtype(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
            }

            function set(e, t, n) {
                let i = getArchtype(e);
                2 === i ? e.set(t, n) : 3 === i ? e.add(n) : e[t] = n
            }

            function isMap(e) {
                return e instanceof Map
            }

            function isSet(e) {
                return e instanceof Set
            }

            function latest(e) {
                return e.copy_ || e.base_
            }

            function shallowCopy(e, t) {
                if (isMap(e)) return new Map(e);
                if (isSet(e)) return new Set(e);
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                let n = immer_isPlainObject(e);
                if (!0 !== t && ("class_only" !== t || n)) {
                    let t = c(e);
                    if (null !== t && n) return { ...e
                    };
                    let i = Object.create(t);
                    return Object.assign(i, e)
                } {
                    let t = Object.getOwnPropertyDescriptors(e);
                    delete t[l];
                    let n = Reflect.ownKeys(t);
                    for (let i = 0; i < n.length; i++) {
                        let s = n[i],
                            o = t[s];
                        !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (t[s] = {
                            configurable: !0,
                            writable: !0,
                            enumerable: o.enumerable,
                            value: e[s]
                        })
                    }
                    return Object.create(c(e), t)
                }
            }

            function freeze(e, t = !1) {
                return isFrozen(e) || isDraft(e) || !isDraftable(e) || (getArchtype(e) > 1 && (e.set = e.add = e.clear = e.delete = dontMutateFrozenCollections), Object.freeze(e), t && Object.entries(e).forEach(([e, t]) => freeze(t, !0))), e
            }

            function dontMutateFrozenCollections() {
                die(2)
            }

            function isFrozen(e) {
                return Object.isFrozen(e)
            }
            var h = {};

            function getPlugin(e) {
                let t = h[e];
                return t || die(0, e), t
            }

            function usePatchesInScope(e, t) {
                t && (getPlugin("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
            }

            function revokeScope(e) {
                leaveScope(e), e.drafts_.forEach(revokeDraft), e.drafts_ = null
            }

            function leaveScope(e) {
                e === s && (s = e.parent_)
            }

            function enterScope(e) {
                return s = {
                    drafts_: [],
                    parent_: s,
                    immer_: e,
                    canAutoFreeze_: !0,
                    unfinalizedDrafts_: 0
                }
            }

            function revokeDraft(e) {
                let t = e[l];
                0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0
            }

            function processResult(e, t) {
                t.unfinalizedDrafts_ = t.drafts_.length;
                let n = t.drafts_[0],
                    i = void 0 !== e && e !== n;
                return i ? (n[l].modified_ && (revokeScope(t), die(4)), isDraftable(e) && (e = finalize(t, e), t.parent_ || maybeFreeze(t, e)), t.patches_ && getPlugin("Patches").generateReplacementPatches_(n[l].base_, e, t.patches_, t.inversePatches_)) : e = finalize(t, n, []), revokeScope(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== o ? e : void 0
            }

            function finalize(e, t, n) {
                if (isFrozen(t)) return t;
                let i = t[l];
                if (!i) return each(t, (s, o) => finalizeProperty(e, i, t, s, o, n)), t;
                if (i.scope_ !== e) return t;
                if (!i.modified_) return maybeFreeze(e, i.base_, !0), i.base_;
                if (!i.finalized_) {
                    i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
                    let t = i.copy_,
                        s = t,
                        o = !1;
                    3 === i.type_ && (s = new Set(t), t.clear(), o = !0), each(s, (s, u) => finalizeProperty(e, i, t, s, u, n, o)), maybeFreeze(e, t, !1), n && e.patches_ && getPlugin("Patches").generatePatches_(i, n, e.patches_, e.inversePatches_)
                }
                return i.copy_
            }

            function finalizeProperty(e, t, n, i, s, o, u) {
                if (isDraft(s)) {
                    let u = o && t && 3 !== t.type_ && !has(t.assigned_, i) ? o.concat(i) : void 0,
                        l = finalize(e, s, u);
                    if (set(n, i, l), !isDraft(l)) return;
                    e.canAutoFreeze_ = !1
                } else u && n.add(s);
                if (isDraftable(s) && !isFrozen(s)) {
                    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
                    finalize(e, s), (!t || !t.scope_.parent_) && "symbol" != typeof i && Object.prototype.propertyIsEnumerable.call(n, i) && maybeFreeze(e, s)
                }
            }

            function maybeFreeze(e, t, n = !1) {
                !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && freeze(t, n)
            }
            var d = {
                    get(e, t) {
                        if (t === l) return e;
                        let n = latest(e);
                        if (!has(n, t)) return function(e, t, n) {
                            let i = getDescriptorFromProto(t, n);
                            return i ? "value" in i ? i.value : i.get ? .call(e.draft_) : void 0
                        }(e, n, t);
                        let i = n[t];
                        return e.finalized_ || !isDraftable(i) ? i : i === peek(e.base_, t) ? (prepareCopy(e), e.copy_[t] = createProxy(i, e)) : i
                    },
                    has: (e, t) => t in latest(e),
                    ownKeys: e => Reflect.ownKeys(latest(e)),
                    set(e, t, n) {
                        let i = getDescriptorFromProto(latest(e), t);
                        if (i ? .set) return i.set.call(e.draft_, n), !0;
                        if (!e.modified_) {
                            let i = peek(latest(e), t),
                                s = i ? .[l];
                            if (s && s.base_ === n) return e.copy_[t] = n, e.assigned_[t] = !1, !0;
                            if ((n === i ? 0 !== n || 1 / n == 1 / i : n != n && i != i) && (void 0 !== n || has(e.base_, t))) return !0;
                            prepareCopy(e), markChanged(e)
                        }
                        return !!(e.copy_[t] === n && (void 0 !== n || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = n, e.assigned_[t] = !0, !0)
                    },
                    deleteProperty: (e, t) => (void 0 !== peek(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, prepareCopy(e), markChanged(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
                    getOwnPropertyDescriptor(e, t) {
                        let n = latest(e),
                            i = Reflect.getOwnPropertyDescriptor(n, t);
                        return i ? {
                            writable: !0,
                            configurable: 1 !== e.type_ || "length" !== t,
                            enumerable: i.enumerable,
                            value: n[t]
                        } : i
                    },
                    defineProperty() {
                        die(11)
                    },
                    getPrototypeOf: e => c(e.base_),
                    setPrototypeOf() {
                        die(12)
                    }
                },
                p = {};

            function peek(e, t) {
                let n = e[l],
                    i = n ? latest(n) : e;
                return i[t]
            }

            function getDescriptorFromProto(e, t) {
                if (!(t in e)) return;
                let n = c(e);
                for (; n;) {
                    let e = Object.getOwnPropertyDescriptor(n, t);
                    if (e) return e;
                    n = c(n)
                }
            }

            function markChanged(e) {
                !e.modified_ && (e.modified_ = !0, e.parent_ && markChanged(e.parent_))
            }

            function prepareCopy(e) {
                e.copy_ || (e.copy_ = shallowCopy(e.base_, e.scope_.immer_.useStrictShallowCopy_))
            }

            function createProxy(e, t) {
                let n = isMap(e) ? getPlugin("MapSet").proxyMap_(e, t) : isSet(e) ? getPlugin("MapSet").proxySet_(e, t) : function(e, t) {
                        let n = Array.isArray(e),
                            i = {
                                type_: n ? 1 : 0,
                                scope_: t ? t.scope_ : s,
                                modified_: !1,
                                finalized_: !1,
                                assigned_: {},
                                parent_: t,
                                base_: e,
                                draft_: null,
                                copy_: null,
                                revoke_: null,
                                isManual_: !1
                            },
                            o = i,
                            u = d;
                        n && (o = [i], u = p);
                        let {
                            revoke: l,
                            proxy: c
                        } = Proxy.revocable(o, u);
                        return i.draft_ = c, i.revoke_ = l, c
                    }(e, t),
                    i = t ? t.scope_ : s;
                return i.drafts_.push(n), n
            }

            function current(e) {
                return isDraft(e) || die(10, e),
                    function currentImpl(e) {
                        let t;
                        if (!isDraftable(e) || isFrozen(e)) return e;
                        let n = e[l];
                        if (n) {
                            if (!n.modified_) return n.base_;
                            n.finalized_ = !0, t = shallowCopy(e, n.scope_.immer_.useStrictShallowCopy_)
                        } else t = shallowCopy(e, !0);
                        return each(t, (e, n) => {
                            set(t, e, currentImpl(n))
                        }), n && (n.finalized_ = !1), t
                    }(e)
            }
            each(d, (e, t) => {
                p[e] = function() {
                    return arguments[0] = arguments[0][0], t.apply(this, arguments)
                }
            }), p.deleteProperty = function(e, t) {
                return p.set.call(this, e, t, void 0)
            }, p.set = function(e, t, n) {
                return d.set.call(this, e[0], t, n, e[0])
            };
            var y = new class {
                    constructor(e) {
                        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, n) => {
                            let i;
                            if ("function" == typeof e && "function" != typeof t) {
                                let n = t;
                                t = e;
                                let i = this;
                                return function(e = n, ...s) {
                                    return i.produce(e, e => t.call(this, e, ...s))
                                }
                            }
                            if ("function" != typeof t && die(6), void 0 !== n && "function" != typeof n && die(7), isDraftable(e)) {
                                let s = enterScope(this),
                                    o = createProxy(e, void 0),
                                    u = !0;
                                try {
                                    i = t(o), u = !1
                                } finally {
                                    u ? revokeScope(s) : leaveScope(s)
                                }
                                return usePatchesInScope(s, n), processResult(i, s)
                            }
                            if (e && "object" == typeof e) die(1, e);
                            else {
                                if (void 0 === (i = t(e)) && (i = e), i === o && (i = void 0), this.autoFreeze_ && freeze(i, !0), n) {
                                    let t = [],
                                        s = [];
                                    getPlugin("Patches").generateReplacementPatches_(e, i, t, s), n(t, s)
                                }
                                return i
                            }
                        }, this.produceWithPatches = (e, t) => {
                            let n, i;
                            if ("function" == typeof e) return (t, ...n) => this.produceWithPatches(t, t => e(t, ...n));
                            let s = this.produce(e, t, (e, t) => {
                                n = e, i = t
                            });
                            return [s, n, i]
                        }, "boolean" == typeof e ? .autoFreeze && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof e ? .useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
                    }
                    createDraft(e) {
                        isDraftable(e) || die(8), isDraft(e) && (e = current(e));
                        let t = enterScope(this),
                            n = createProxy(e, void 0);
                        return n[l].isManual_ = !0, leaveScope(t), n
                    }
                    finishDraft(e, t) {
                        let n = e && e[l];
                        n && n.isManual_ || die(9);
                        let {
                            scope_: i
                        } = n;
                        return usePatchesInScope(i, t), processResult(void 0, i)
                    }
                    setAutoFreeze(e) {
                        this.autoFreeze_ = e
                    }
                    setUseStrictShallowCopy(e) {
                        this.useStrictShallowCopy_ = e
                    }
                    applyPatches(e, t) {
                        let n;
                        for (n = t.length - 1; n >= 0; n--) {
                            let i = t[n];
                            if (0 === i.path.length && "replace" === i.op) {
                                e = i.value;
                                break
                            }
                        }
                        n > -1 && (t = t.slice(n + 1));
                        let i = getPlugin("Patches").applyPatches_;
                        return isDraft(e) ? i(e, t) : this.produce(e, e => i(e, t))
                    }
                },
                m = y.produce;
            y.produceWithPatches.bind(y), y.setAutoFreeze.bind(y), y.setUseStrictShallowCopy.bind(y), y.applyPatches.bind(y), y.createDraft.bind(y), y.finishDraft.bind(y);
            var ensureIsArray = e => Array.isArray(e) ? e : [e],
                g = 0,
                b = class {
                    revision = g;
                    _value;
                    _lastValue;
                    _isEqual = tripleEq;
                    constructor(e, t = tripleEq) {
                        this._value = this._lastValue = e, this._isEqual = t
                    }
                    get value() {
                        return this._value
                    }
                    set value(e) {
                        this.value !== e && (this._value = e, this.revision = ++g)
                    }
                };

            function tripleEq(e, t) {
                return e === t
            }

            function getValue(e) {
                return e instanceof b || console.warn("Not a valid cell! ", e), e.value
            }
            var neverEq = (e, t) => !1;

            function createTag() {
                return function(e, t = tripleEq) {
                    return new b(null, t)
                }(0, neverEq)
            }
            var consumeCollection = e => {
                let t = e.collectionTag;
                null === t && (t = e.collectionTag = createTag()), getValue(t)
            };
            Symbol();
            var v = 0,
                _ = Object.getPrototypeOf({}),
                w = class {
                    constructor(e) {
                        this.value = e, this.value = e, this.tag.value = e
                    }
                    proxy = new Proxy(this, S);
                    tag = createTag();
                    tags = {};
                    children = {};
                    collectionTag = null;
                    id = v++
                },
                S = {
                    get(e, t) {
                        let n = function() {
                            let {
                                value: n
                            } = e, i = Reflect.get(n, t);
                            if ("symbol" == typeof t || t in _) return i;
                            if ("object" == typeof i && null !== i) {
                                let n = e.children[t];
                                return void 0 === n && (n = e.children[t] = Array.isArray(i) ? new P(i) : new w(i)), n.tag && getValue(n.tag), n.proxy
                            } {
                                let n = e.tags[t];
                                return void 0 === n && ((n = e.tags[t] = createTag()).value = i), getValue(n), i
                            }
                        }();
                        return n
                    },
                    ownKeys: e => (consumeCollection(e), Reflect.ownKeys(e.value)),
                    getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e.value, t),
                    has: (e, t) => Reflect.has(e.value, t)
                },
                P = class {
                    constructor(e) {
                        this.value = e, this.value = e, this.tag.value = e
                    }
                    proxy = new Proxy([this], O);
                    tag = createTag();
                    tags = {};
                    children = {};
                    collectionTag = null;
                    id = v++
                },
                O = {
                    get: ([e], t) => ("length" === t && consumeCollection(e), S.get(e, t)),
                    ownKeys: ([e]) => S.ownKeys(e),
                    getOwnPropertyDescriptor: ([e], t) => S.getOwnPropertyDescriptor(e, t),
                    has: ([e], t) => S.has(e, t)
                },
                C = "undefined" != typeof WeakRef ? WeakRef : class {
                    constructor(e) {
                        this.value = e
                    }
                    deref() {
                        return this.value
                    }
                };

            function createCacheNode() {
                return {
                    s: 0,
                    v: void 0,
                    o: null,
                    p: null
                }
            }

            function weakMapMemoize(e, t = {}) {
                let n, i = createCacheNode(),
                    {
                        resultEqualityCheck: s
                    } = t,
                    o = 0;

                function memoized() {
                    let t, u = i,
                        {
                            length: l
                        } = arguments;
                    for (let e = 0; e < l; e++) {
                        let t = arguments[e];
                        if ("function" == typeof t || "object" == typeof t && null !== t) {
                            let e = u.o;
                            null === e && (u.o = e = new WeakMap);
                            let n = e.get(t);
                            void 0 === n ? (u = createCacheNode(), e.set(t, u)) : u = n
                        } else {
                            let e = u.p;
                            null === e && (u.p = e = new Map);
                            let n = e.get(t);
                            void 0 === n ? (u = createCacheNode(), e.set(t, u)) : u = n
                        }
                    }
                    let c = u;
                    if (1 === u.s) t = u.v;
                    else if (t = e.apply(null, arguments), o++, s) {
                        let e = n ? .deref ? .() ? ? n;
                        null != e && s(e, t) && (t = e, 0 !== o && o--);
                        let i = "object" == typeof t && null !== t || "function" == typeof t;
                        n = i ? new C(t) : t
                    }
                    return c.s = 1, c.v = t, t
                }
                return memoized.clearCache = () => {
                    i = createCacheNode(), memoized.resetResultsCount()
                }, memoized.resultsCount = () => o, memoized.resetResultsCount = () => {
                    o = 0
                }, memoized
            }

            function createSelectorCreator(e, ...t) {
                let n = "function" == typeof e ? {
                        memoize: e,
                        memoizeOptions: t
                    } : e,
                    createSelector2 = (...e) => {
                        let t, i = 0,
                            s = 0,
                            o = {},
                            u = e.pop();
                        "object" == typeof u && (o = u, u = e.pop()),
                            function(e, t = `expected a function, instead received ${typeof e}`) {
                                if ("function" != typeof e) throw TypeError(t)
                            }(u, `createSelector expects an output function after the inputs, but received: [${typeof u}]`);
                        let l = { ...n,
                                ...o
                            },
                            {
                                memoize: c,
                                memoizeOptions: f = [],
                                argsMemoize: h = weakMapMemoize,
                                argsMemoizeOptions: d = [],
                                devModeChecks: p = {}
                            } = l,
                            y = ensureIsArray(f),
                            m = ensureIsArray(d),
                            g = function(e) {
                                let t = Array.isArray(e[0]) ? e[0] : e;
                                return ! function(e, t = "expected all items to be functions, instead received the following types: ") {
                                    if (!e.every(e => "function" == typeof e)) {
                                        let n = e.map(e => "function" == typeof e ? `function ${e.name||"unnamed"}()` : typeof e).join(", ");
                                        throw TypeError(`${t}[${n}]`)
                                    }
                                }(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t
                            }(e),
                            b = c(function() {
                                return i++, u.apply(null, arguments)
                            }, ...y),
                            v = h(function() {
                                s++;
                                let e = function(e, t) {
                                    let n = [],
                                        {
                                            length: i
                                        } = e;
                                    for (let s = 0; s < i; s++) n.push(e[s].apply(null, t));
                                    return n
                                }(g, arguments);
                                return t = b.apply(null, e)
                            }, ...m);
                        return Object.assign(v, {
                            resultFunc: u,
                            memoizedResultFunc: b,
                            dependencies: g,
                            dependencyRecomputations: () => s,
                            resetDependencyRecomputations: () => {
                                s = 0
                            },
                            lastResult: () => t,
                            recomputations: () => i,
                            resetRecomputations: () => {
                                i = 0
                            },
                            memoize: c,
                            argsMemoize: h
                        })
                    };
                return Object.assign(createSelector2, {
                    withTypes: () => createSelector2
                }), createSelector2
            }
            var E = createSelectorCreator(weakMapMemoize),
                R = Object.assign((e, t = E) => {
                    ! function(e, t = `expected an object, instead received ${typeof e}`) {
                        if ("object" != typeof e) throw TypeError(t)
                    }(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
                    let n = Object.keys(e),
                        i = n.map(t => e[t]),
                        s = t(i, (...e) => e.reduce((e, t, i) => (e[n[i]] = t, e), {}));
                    return s
                }, {
                    withTypes: () => R
                });

            function formatProdErrorMessage(e) {
                return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
            }
            var x = "function" == typeof Symbol && Symbol.observable || "@@observable",
                randomString = () => Math.random().toString(36).substring(7).split("").join("."),
                T = {
                    INIT: `@@redux/INIT${randomString()}`,
                    REPLACE: `@@redux/REPLACE${randomString()}`,
                    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
                };

            function redux_isPlainObject(e) {
                if ("object" != typeof e || null === e) return !1;
                let t = e;
                for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t || null === Object.getPrototypeOf(e)
            }

            function compose(...e) {
                return 0 === e.length ? e => e : 1 === e.length ? e[0] : e.reduce((e, t) => (...n) => e(t(...n)))
            }

            function createThunkMiddleware(e) {
                return ({
                    dispatch: t,
                    getState: n
                }) => i => s => "function" == typeof s ? s(t, n, e) : i(s)
            }
            var A = createThunkMiddleware();
            n(7342), ((...e) => {
                let t = createSelectorCreator(...e),
                    n = Object.assign((...e) => {
                        let n = t(...e),
                            wrappedSelector = (e, ...t) => n(isDraft(e) ? current(e) : e, ...t);
                        return Object.assign(wrappedSelector, n), wrappedSelector
                    }, {
                        withTypes: () => n
                    })
            })(weakMapMemoize);
            var Q = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
                if (0 != arguments.length) return "object" == typeof arguments[0] ? compose : compose.apply(null, arguments)
            };
            "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;

            function createAction(e, t) {
                function actionCreator(...n) {
                    if (t) {
                        let i = t(...n);
                        if (!i) throw Error(redux_toolkit_modern_formatProdErrorMessage(0));
                        return {
                            type: e,
                            payload: i.payload,
                            ..."meta" in i && {
                                meta: i.meta
                            },
                            ..."error" in i && {
                                error: i.error
                            }
                        }
                    }
                    return {
                        type: e,
                        payload: n[0]
                    }
                }
                return actionCreator.toString = () => `${e}`, actionCreator.type = e, actionCreator.match = t => redux_isPlainObject(t) && "type" in t && "string" == typeof t.type && t.type === e, actionCreator
            }
            var j = class _Tuple extends Array {
                constructor(...e) {
                    super(...e), Object.setPrototypeOf(this, _Tuple.prototype)
                }
                static get[Symbol.species]() {
                    return _Tuple
                }
                concat(...e) {
                    return super.concat.apply(this, e)
                }
                prepend(...e) {
                    return 1 === e.length && Array.isArray(e[0]) ? new _Tuple(...e[0].concat(this)) : new _Tuple(...e.concat(this))
                }
            };

            function freezeDraftable(e) {
                return isDraftable(e) ? m(e, () => {}) : e
            }

            function emplace(e, t, n) {
                if (e.has(t)) {
                    let i = e.get(t);
                    return n.update && (i = n.update(i, t, e), e.set(t, i)), i
                }
                if (!n.insert) throw Error(redux_toolkit_modern_formatProdErrorMessage(10));
                let i = n.insert(t, e);
                return e.set(t, i), i
            }
            var buildGetDefaultMiddleware = () => function(e) {
                    let {
                        thunk: t = !0,
                        immutableCheck: n = !0,
                        serializableCheck: i = !0,
                        actionCreatorCheck: s = !0
                    } = e ? ? {}, o = new j;
                    return t && ("boolean" == typeof t ? o.push(A) : o.push(createThunkMiddleware(t.extraArgument))), o
                },
                createQueueWithTimer = e => t => {
                    setTimeout(t, e)
                },
                D = "undefined" != typeof window && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10),
                autoBatchEnhancer = (e = {
                    type: "raf"
                }) => t => (...n) => {
                    let i = t(...n),
                        s = !0,
                        o = !1,
                        u = !1,
                        l = new Set,
                        c = "tick" === e.type ? queueMicrotask : "raf" === e.type ? D : "callback" === e.type ? e.queueNotification : createQueueWithTimer(e.timeout),
                        notifyListeners = () => {
                            u = !1, o && (o = !1, l.forEach(e => e()))
                        };
                    return Object.assign({}, i, {
                        subscribe(e) {
                            let t = i.subscribe(() => s && e());
                            return l.add(e), () => {
                                t(), l.delete(e)
                            }
                        },
                        dispatch(e) {
                            try {
                                return (o = !(s = !e ? .meta ? .RTK_autoBatch)) && !u && (u = !0, c(notifyListeners)), i.dispatch(e)
                            } finally {
                                s = !0
                            }
                        }
                    })
                },
                buildGetDefaultEnhancers = e => function(t) {
                    let {
                        autoBatch: n = !0
                    } = t ? ? {}, i = new j(e);
                    return n && i.push(autoBatchEnhancer("object" == typeof n ? n : void 0)), i
                };

            function configureStore(e) {
                let t, n;
                let i = buildGetDefaultMiddleware(),
                    {
                        reducer: s,
                        middleware: o,
                        devTools: u = !0,
                        preloadedState: l,
                        enhancers: c
                    } = e || {};
                if ("function" == typeof s) t = s;
                else if (redux_isPlainObject(s)) t = function(e) {
                    let t;
                    let n = Object.keys(e),
                        i = {};
                    for (let t = 0; t < n.length; t++) {
                        let s = n[t];
                        "function" == typeof e[s] && (i[s] = e[s])
                    }
                    let s = Object.keys(i);
                    try {
                        ! function(e) {
                            Object.keys(e).forEach(t => {
                                let n = e[t],
                                    i = n(void 0, {
                                        type: T.INIT
                                    });
                                if (void 0 === i) throw Error(formatProdErrorMessage(12));
                                if (void 0 === n(void 0, {
                                        type: T.PROBE_UNKNOWN_ACTION()
                                    })) throw Error(formatProdErrorMessage(13))
                            })
                        }(i)
                    } catch (e) {
                        t = e
                    }
                    return function(e = {}, n) {
                        if (t) throw t;
                        let o = !1,
                            u = {};
                        for (let t = 0; t < s.length; t++) {
                            let l = s[t],
                                c = i[l],
                                f = e[l],
                                h = c(f, n);
                            if (void 0 === h) throw n && n.type, Error(formatProdErrorMessage(14));
                            u[l] = h, o = o || h !== f
                        }
                        return (o = o || s.length !== Object.keys(e).length) ? u : e
                    }
                }(s);
                else throw Error(redux_toolkit_modern_formatProdErrorMessage(1));
                n = "function" == typeof o ? o(i) : i();
                let f = compose;
                u && (f = Q({
                    trace: !1,
                    ..."object" == typeof u && u
                }));
                let h = function(...e) {
                        return t => (n, i) => {
                            let s = t(n, i),
                                dispatch = () => {
                                    throw Error(formatProdErrorMessage(15))
                                },
                                o = {
                                    getState: s.getState,
                                    dispatch: (e, ...t) => dispatch(e, ...t)
                                },
                                u = e.map(e => e(o));
                            return dispatch = compose(...u)(s.dispatch), { ...s,
                                dispatch
                            }
                        }
                    }(...n),
                    d = buildGetDefaultEnhancers(h),
                    p = "function" == typeof c ? c(d) : d(),
                    y = f(...p);
                return function createStore(e, t, n) {
                    if ("function" != typeof e) throw Error(formatProdErrorMessage(2));
                    if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw Error(formatProdErrorMessage(0));
                    if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
                        if ("function" != typeof n) throw Error(formatProdErrorMessage(1));
                        return n(createStore)(e, t)
                    }
                    let i = e,
                        s = t,
                        o = new Map,
                        u = o,
                        l = 0,
                        c = !1;

                    function ensureCanMutateNextListeners() {
                        u === o && (u = new Map, o.forEach((e, t) => {
                            u.set(t, e)
                        }))
                    }

                    function getState() {
                        if (c) throw Error(formatProdErrorMessage(3));
                        return s
                    }

                    function subscribe(e) {
                        if ("function" != typeof e) throw Error(formatProdErrorMessage(4));
                        if (c) throw Error(formatProdErrorMessage(5));
                        let t = !0;
                        ensureCanMutateNextListeners();
                        let n = l++;
                        return u.set(n, e),
                            function() {
                                if (t) {
                                    if (c) throw Error(formatProdErrorMessage(6));
                                    t = !1, ensureCanMutateNextListeners(), u.delete(n), o = null
                                }
                            }
                    }

                    function dispatch(e) {
                        if (!redux_isPlainObject(e)) throw Error(formatProdErrorMessage(7));
                        if (void 0 === e.type) throw Error(formatProdErrorMessage(8));
                        if ("string" != typeof e.type) throw Error(formatProdErrorMessage(17));
                        if (c) throw Error(formatProdErrorMessage(9));
                        try {
                            c = !0, s = i(s, e)
                        } finally {
                            c = !1
                        }
                        let t = o = u;
                        return t.forEach(e => {
                            e()
                        }), e
                    }
                    return dispatch({
                        type: T.INIT
                    }), {
                        dispatch,
                        subscribe,
                        getState,
                        replaceReducer: function(e) {
                            if ("function" != typeof e) throw Error(formatProdErrorMessage(10));
                            i = e, dispatch({
                                type: T.REPLACE
                            })
                        },
                        [x]: function() {
                            return {
                                subscribe(e) {
                                    if ("object" != typeof e || null === e) throw Error(formatProdErrorMessage(11));

                                    function observeState() {
                                        e.next && e.next(getState())
                                    }
                                    observeState();
                                    let t = subscribe(observeState);
                                    return {
                                        unsubscribe: t
                                    }
                                },
                                [x]() {
                                    return this
                                }
                            }
                        }
                    }
                }(t, l, y)
            }

            function executeReducerBuilderCallback(e) {
                let t;
                let n = {},
                    i = [],
                    s = {
                        addCase(e, t) {
                            let i = "string" == typeof e ? e : e.type;
                            if (!i) throw Error(redux_toolkit_modern_formatProdErrorMessage(28));
                            if (i in n) throw Error(redux_toolkit_modern_formatProdErrorMessage(29));
                            return n[i] = t, s
                        },
                        addMatcher: (e, t) => (i.push({
                            matcher: e,
                            reducer: t
                        }), s),
                        addDefaultCase: e => (t = e, s)
                    };
                return e(s), [n, i, t]
            }
            var nanoid = (e = 21) => {
                    let t = "",
                        n = e;
                    for (; n--;) t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW" [64 * Math.random() | 0];
                    return t
                },
                M = Symbol.for("rtk-slice-createasyncthunk"),
                k = ((i = k || {}).reducer = "reducer", i.reducerWithPrepare = "reducerWithPrepare", i.asyncThunk = "asyncThunk", i),
                I = function({
                    creators: e
                } = {}) {
                    let t = e ? .asyncThunk ? .[M];
                    return function(e) {
                        let n;
                        let {
                            name: i,
                            reducerPath: s = i
                        } = e;
                        if (!i) throw Error(redux_toolkit_modern_formatProdErrorMessage(11));
                        let o = ("function" == typeof e.reducers ? e.reducers(function() {
                                function asyncThunk(e, t) {
                                    return {
                                        _reducerDefinitionType: "asyncThunk",
                                        payloadCreator: e,
                                        ...t
                                    }
                                }
                                return asyncThunk.withTypes = () => asyncThunk, {
                                    reducer: e => Object.assign({
                                        [e.name]: (...t) => e(...t)
                                    }[e.name], {
                                        _reducerDefinitionType: "reducer"
                                    }),
                                    preparedReducer: (e, t) => ({
                                        _reducerDefinitionType: "reducerWithPrepare",
                                        prepare: e,
                                        reducer: t
                                    }),
                                    asyncThunk
                                }
                            }()) : e.reducers) || {},
                            u = Object.keys(o),
                            l = {
                                sliceCaseReducersByName: {},
                                sliceCaseReducersByType: {},
                                actionCreators: {},
                                sliceMatchers: []
                            },
                            c = {
                                addCase(e, t) {
                                    let n = "string" == typeof e ? e : e.type;
                                    if (!n) throw Error(redux_toolkit_modern_formatProdErrorMessage(12));
                                    if (n in l.sliceCaseReducersByType) throw Error(redux_toolkit_modern_formatProdErrorMessage(13));
                                    return l.sliceCaseReducersByType[n] = t, c
                                },
                                addMatcher: (e, t) => (l.sliceMatchers.push({
                                    matcher: e,
                                    reducer: t
                                }), c),
                                exposeAction: (e, t) => (l.actionCreators[e] = t, c),
                                exposeCaseReducer: (e, t) => (l.sliceCaseReducersByName[e] = t, c)
                            };

                        function buildReducer() {
                            let [t = {}, n = [], i] = "function" == typeof e.extraReducers ? executeReducerBuilderCallback(e.extraReducers) : [e.extraReducers], s = { ...t,
                                ...l.sliceCaseReducersByType
                            };
                            return function(e, t) {
                                let n;
                                let [i, s, o] = executeReducerBuilderCallback(t);
                                if ("function" == typeof e) n = () => freezeDraftable(e());
                                else {
                                    let t = freezeDraftable(e);
                                    n = () => t
                                }

                                function reducer(e = n(), t) {
                                    let u = [i[t.type], ...s.filter(({
                                        matcher: e
                                    }) => e(t)).map(({
                                        reducer: e
                                    }) => e)];
                                    return 0 === u.filter(e => !!e).length && (u = [o]), u.reduce((e, n) => {
                                        if (n) {
                                            if (isDraft(e)) {
                                                let i = n(e, t);
                                                return void 0 === i ? e : i
                                            }
                                            if (isDraftable(e)) return m(e, e => n(e, t)); {
                                                let i = n(e, t);
                                                if (void 0 === i) {
                                                    if (null === e) return e;
                                                    throw Error(redux_toolkit_modern_formatProdErrorMessage(9))
                                                }
                                                return i
                                            }
                                        }
                                        return e
                                    }, e)
                                }
                                return reducer.getInitialState = n, reducer
                            }(e.initialState, e => {
                                for (let t in s) e.addCase(t, s[t]);
                                for (let t of l.sliceMatchers) e.addMatcher(t.matcher, t.reducer);
                                for (let t of n) e.addMatcher(t.matcher, t.reducer);
                                i && e.addDefaultCase(i)
                            })
                        }
                        u.forEach(n => {
                            let s = o[n],
                                u = {
                                    reducerName: n,
                                    type: `${i}/${n}`,
                                    createNotation: "function" == typeof e.reducers
                                };
                            "asyncThunk" === s._reducerDefinitionType ? function({
                                type: e,
                                reducerName: t
                            }, n, i, s) {
                                if (!s) throw Error(redux_toolkit_modern_formatProdErrorMessage(18));
                                let {
                                    payloadCreator: o,
                                    fulfilled: u,
                                    pending: l,
                                    rejected: c,
                                    settled: f,
                                    options: h
                                } = n, d = s(e, o, h);
                                i.exposeAction(t, d), u && i.addCase(d.fulfilled, u), l && i.addCase(d.pending, l), c && i.addCase(d.rejected, c), f && i.addMatcher(d.settled, f), i.exposeCaseReducer(t, {
                                    fulfilled: u || noop,
                                    pending: l || noop,
                                    rejected: c || noop,
                                    settled: f || noop
                                })
                            }(u, s, c, t) : function({
                                type: e,
                                reducerName: t,
                                createNotation: n
                            }, i, s) {
                                let o, u;
                                if ("reducer" in i) {
                                    if (n && "reducerWithPrepare" !== i._reducerDefinitionType) throw Error(redux_toolkit_modern_formatProdErrorMessage(17));
                                    o = i.reducer, u = i.prepare
                                } else o = i;
                                s.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, u ? createAction(e, u) : createAction(e))
                            }(u, s, c)
                        });
                        let selectSelf = e => e,
                            f = new Map;

                        function reducer(e, t) {
                            return n || (n = buildReducer()), n(e, t)
                        }

                        function getInitialState() {
                            return n || (n = buildReducer()), n.getInitialState()
                        }

                        function makeSelectorProps(t, n = !1) {
                            function selectSlice(e) {
                                let i = e[t];
                                return void 0 === i && n && (i = getInitialState()), i
                            }

                            function getSelectors(t = selectSelf) {
                                let i = emplace(f, n, {
                                    insert: () => new WeakMap
                                });
                                return emplace(i, t, {
                                    insert: () => {
                                        let i = {};
                                        for (let [s, o] of Object.entries(e.selectors ? ? {})) i[s] = function(e, t, n, i) {
                                            function wrapper(s, ...o) {
                                                let u = t(s);
                                                return void 0 === u && i && (u = n()), e(u, ...o)
                                            }
                                            return wrapper.unwrapped = e, wrapper
                                        }(o, t, getInitialState, n);
                                        return i
                                    }
                                })
                            }
                            return {
                                reducerPath: t,
                                getSelectors,
                                get selectors() {
                                    return getSelectors(selectSlice)
                                },
                                selectSlice
                            }
                        }
                        let h = {
                            name: i,
                            reducer,
                            actions: l.actionCreators,
                            caseReducers: l.sliceCaseReducersByName,
                            getInitialState,
                            ...makeSelectorProps(s),
                            injectInto(e, {
                                reducerPath: t,
                                ...n
                            } = {}) {
                                let i = t ? ? s;
                                return e.inject({
                                    reducerPath: i,
                                    reducer
                                }, n), { ...h,
                                    ...makeSelectorProps(i, !0)
                                }
                            }
                        };
                        return h
                    }
                }();

            function noop() {}
            var assertFunction = (e, t) => {
                    if ("function" != typeof e) throw Error(redux_toolkit_modern_formatProdErrorMessage(32))
                },
                {
                    assign: q
                } = Object,
                N = "listenerMiddleware",
                getListenerEntryPropsFrom = e => {
                    let {
                        type: t,
                        actionCreator: n,
                        matcher: i,
                        predicate: s,
                        effect: o
                    } = e;
                    if (t) s = createAction(t).match;
                    else if (n) t = n.type, s = n.match;
                    else if (i) s = i;
                    else if (s);
                    else throw Error(redux_toolkit_modern_formatProdErrorMessage(21));
                    return assertFunction(o, "options.listener"), {
                        predicate: s,
                        type: t,
                        effect: o
                    }
                },
                F = Object.assign(e => {
                    let {
                        type: t,
                        predicate: n,
                        effect: i
                    } = getListenerEntryPropsFrom(e), s = nanoid(), o = {
                        id: s,
                        effect: i,
                        type: t,
                        predicate: n,
                        pending: new Set,
                        unsubscribe: () => {
                            throw Error(redux_toolkit_modern_formatProdErrorMessage(22))
                        }
                    };
                    return o
                }, {
                    withTypes: () => F
                }),
                K = Object.assign(createAction(`${N}/add`), {
                    withTypes: () => K
                });
            createAction(`${N}/removeAll`);
            var U = Object.assign(createAction(`${N}/remove`), {
                withTypes: () => U
            });

            function redux_toolkit_modern_formatProdErrorMessage(e) {
                return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
            }
            Symbol.for("rtk-state-proxy-original")
        },
        3621: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return o
                }
            });
            var i = n(1002),
                s = n(822);
            let FocusManager = class FocusManager extends i.l {
                constructor() {
                    super(), this.setup = e => {
                        if (!s.sk && window.addEventListener) {
                            let listener = () => e();
                            return window.addEventListener("visibilitychange", listener, !1), window.addEventListener("focus", listener, !1), () => {
                                window.removeEventListener("visibilitychange", listener), window.removeEventListener("focus", listener)
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.cleanup || this.setEventListener(this.setup)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var e;
                        null == (e = this.cleanup) || e.call(this), this.cleanup = void 0
                    }
                }
                setEventListener(e) {
                    var t;
                    this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e(e => {
                        "boolean" == typeof e ? this.setFocused(e) : this.onFocus()
                    })
                }
                setFocused(e) {
                    let t = this.focused !== e;
                    t && (this.focused = e, this.onFocus())
                }
                onFocus() {
                    this.listeners.forEach(({
                        listener: e
                    }) => {
                        e()
                    })
                }
                isFocused() {
                    return "boolean" == typeof this.focused ? this.focused : "undefined" == typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
                }
            };
            let o = new FocusManager
        },
        9567: function(e, t, n) {
            "use strict";

            function infiniteQueryBehavior() {
                return {
                    onFetch: e => {
                        e.fetchFn = () => {
                            var t, n, i, s, o, u;
                            let l;
                            let c = null == (t = e.fetchOptions) ? void 0 : null == (n = t.meta) ? void 0 : n.refetchPage,
                                f = null == (i = e.fetchOptions) ? void 0 : null == (s = i.meta) ? void 0 : s.fetchMore,
                                h = null == f ? void 0 : f.pageParam,
                                d = (null == f ? void 0 : f.direction) === "forward",
                                p = (null == f ? void 0 : f.direction) === "backward",
                                y = (null == (o = e.state.data) ? void 0 : o.pages) || [],
                                m = (null == (u = e.state.data) ? void 0 : u.pageParams) || [],
                                g = m,
                                b = !1,
                                addSignalProperty = t => {
                                    Object.defineProperty(t, "signal", {
                                        enumerable: !0,
                                        get: () => {
                                            var t, n;
                                            return null != (t = e.signal) && t.aborted ? b = !0 : null == (n = e.signal) || n.addEventListener("abort", () => {
                                                b = !0
                                            }), e.signal
                                        }
                                    })
                                },
                                v = e.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'")),
                                buildNewPages = (e, t, n, i) => (g = i ? [t, ...g] : [...g, t], i ? [n, ...e] : [...e, n]),
                                fetchPage = (t, n, i, s) => {
                                    if (b) return Promise.reject("Cancelled");
                                    if (void 0 === i && !n && t.length) return Promise.resolve(t);
                                    let o = {
                                        queryKey: e.queryKey,
                                        pageParam: i,
                                        meta: e.options.meta
                                    };
                                    addSignalProperty(o);
                                    let u = v(o),
                                        l = Promise.resolve(u).then(e => buildNewPages(t, i, e, s));
                                    return l
                                };
                            if (y.length) {
                                if (d) {
                                    let t = void 0 !== h,
                                        n = t ? h : getNextPageParam(e.options, y);
                                    l = fetchPage(y, t, n)
                                } else if (p) {
                                    let t = void 0 !== h,
                                        n = t ? h : getPreviousPageParam(e.options, y);
                                    l = fetchPage(y, t, n, !0)
                                } else {
                                    g = [];
                                    let t = void 0 === e.options.getNextPageParam,
                                        n = !c || !y[0] || c(y[0], 0, y);
                                    l = n ? fetchPage([], t, m[0]) : Promise.resolve(buildNewPages([], m[0], y[0]));
                                    for (let n = 1; n < y.length; n++) l = l.then(i => {
                                        let s = !c || !y[n] || c(y[n], n, y);
                                        if (s) {
                                            let s = t ? m[n] : getNextPageParam(e.options, i);
                                            return fetchPage(i, t, s)
                                        }
                                        return Promise.resolve(buildNewPages(i, m[n], y[n]))
                                    })
                                }
                            } else l = fetchPage([]);
                            let _ = l.then(e => ({
                                pages: e,
                                pageParams: g
                            }));
                            return _
                        }
                    }
                }
            }

            function getNextPageParam(e, t) {
                return null == e.getNextPageParam ? void 0 : e.getNextPageParam(t[t.length - 1], t)
            }

            function getPreviousPageParam(e, t) {
                return null == e.getPreviousPageParam ? void 0 : e.getPreviousPageParam(t[0], t)
            }

            function hasNextPage(e, t) {
                if (e.getNextPageParam && Array.isArray(t)) {
                    let n = getNextPageParam(e, t);
                    return null != n && !1 !== n
                }
            }

            function hasPreviousPage(e, t) {
                if (e.getPreviousPageParam && Array.isArray(t)) {
                    let n = getPreviousPageParam(e, t);
                    return null != n && !1 !== n
                }
            }
            n.d(t, {
                Gm: function() {
                    return infiniteQueryBehavior
                },
                Qy: function() {
                    return hasNextPage
                },
                ZF: function() {
                    return hasPreviousPage
                }
            })
        },
        7380: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return i
                }
            });
            let i = console
        },
        8276: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return getDefaultState
                },
                m: function() {
                    return Mutation
                }
            });
            var i = n(7380),
                s = n(8806),
                o = n(4916),
                u = n(2069);
            let Mutation = class Mutation extends o.F {
                constructor(e) {
                    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || i._, this.observers = [], this.state = e.state || getDefaultState(), this.setOptions(e.options), this.scheduleGc()
                }
                setOptions(e) {
                    this.options = { ...this.defaultOptions,
                        ...e
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                get meta() {
                    return this.options.meta
                }
                setState(e) {
                    this.dispatch({
                        type: "setState",
                        state: e
                    })
                }
                addObserver(e) {
                    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
                        type: "observerAdded",
                        mutation: this,
                        observer: e
                    }))
                }
                removeObserver(e) {
                    this.observers = this.observers.filter(t => t !== e), this.scheduleGc(), this.mutationCache.notify({
                        type: "observerRemoved",
                        mutation: this,
                        observer: e
                    })
                }
                optionalRemove() {
                    this.observers.length || ("loading" === this.state.status ? this.scheduleGc() : this.mutationCache.remove(this))
                }
                continue () {
                    var e, t;
                    return null != (e = null == (t = this.retryer) ? void 0 : t.continue()) ? e : this.execute()
                }
                async execute() {
                    var e, t, n, i, s, o, l, c, f, h, d, p, y, m, g, b, v, _, w, S;
                    let P = "loading" === this.state.status;
                    try {
                        if (!P) {
                            this.dispatch({
                                type: "loading",
                                variables: this.options.variables
                            }), await (null == (f = (h = this.mutationCache.config).onMutate) ? void 0 : f.call(h, this.state.variables, this));
                            let e = await (null == (d = (p = this.options).onMutate) ? void 0 : d.call(p, this.state.variables));
                            e !== this.state.context && this.dispatch({
                                type: "loading",
                                context: e,
                                variables: this.state.variables
                            })
                        }
                        let y = await (() => {
                            var e;
                            return this.retryer = (0, u.Mz)({
                                fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
                                onFail: (e, t) => {
                                    this.dispatch({
                                        type: "failed",
                                        failureCount: e,
                                        error: t
                                    })
                                },
                                onPause: () => {
                                    this.dispatch({
                                        type: "pause"
                                    })
                                },
                                onContinue: () => {
                                    this.dispatch({
                                        type: "continue"
                                    })
                                },
                                retry: null != (e = this.options.retry) ? e : 0,
                                retryDelay: this.options.retryDelay,
                                networkMode: this.options.networkMode
                            }), this.retryer.promise
                        })();
                        return await (null == (e = (t = this.mutationCache.config).onSuccess) ? void 0 : e.call(t, y, this.state.variables, this.state.context, this)), await (null == (n = (i = this.options).onSuccess) ? void 0 : n.call(i, y, this.state.variables, this.state.context)), await (null == (s = (o = this.mutationCache.config).onSettled) ? void 0 : s.call(o, y, null, this.state.variables, this.state.context, this)), await (null == (l = (c = this.options).onSettled) ? void 0 : l.call(c, y, null, this.state.variables, this.state.context)), this.dispatch({
                            type: "success",
                            data: y
                        }), y
                    } catch (e) {
                        try {
                            throw await (null == (y = (m = this.mutationCache.config).onError) ? void 0 : y.call(m, e, this.state.variables, this.state.context, this)), await (null == (g = (b = this.options).onError) ? void 0 : g.call(b, e, this.state.variables, this.state.context)), await (null == (v = (_ = this.mutationCache.config).onSettled) ? void 0 : v.call(_, void 0, e, this.state.variables, this.state.context, this)), await (null == (w = (S = this.options).onSettled) ? void 0 : w.call(S, void 0, e, this.state.variables, this.state.context)), e
                        } finally {
                            this.dispatch({
                                type: "error",
                                error: e
                            })
                        }
                    }
                }
                dispatch(e) {
                    this.state = (t => {
                        switch (e.type) {
                            case "failed":
                                return { ...t,
                                    failureCount: e.failureCount,
                                    failureReason: e.error
                                };
                            case "pause":
                                return { ...t,
                                    isPaused: !0
                                };
                            case "continue":
                                return { ...t,
                                    isPaused: !1
                                };
                            case "loading":
                                return { ...t,
                                    context: e.context,
                                    data: void 0,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    isPaused: !(0, u.Kw)(this.options.networkMode),
                                    status: "loading",
                                    variables: e.variables
                                };
                            case "success":
                                return { ...t,
                                    data: e.data,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    status: "success",
                                    isPaused: !1
                                };
                            case "error":
                                return { ...t,
                                    data: void 0,
                                    error: e.error,
                                    failureCount: t.failureCount + 1,
                                    failureReason: e.error,
                                    isPaused: !1,
                                    status: "error"
                                };
                            case "setState":
                                return { ...t,
                                    ...e.state
                                }
                        }
                    })(this.state), s.V.batch(() => {
                        this.observers.forEach(t => {
                            t.onMutationUpdate(e)
                        }), this.mutationCache.notify({
                            mutation: this,
                            type: "updated",
                            action: e
                        })
                    })
                }
            };

            function getDefaultState() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0
                }
            }
        },
        8806: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return s
                }
            });
            var i = n(822);
            let s = function() {
                let e = [],
                    t = 0,
                    notifyFn = e => {
                        e()
                    },
                    batchNotifyFn = e => {
                        e()
                    },
                    schedule = n => {
                        t ? e.push(n) : (0, i.A4)(() => {
                            notifyFn(n)
                        })
                    },
                    flush = () => {
                        let t = e;
                        e = [], t.length && (0, i.A4)(() => {
                            batchNotifyFn(() => {
                                t.forEach(e => {
                                    notifyFn(e)
                                })
                            })
                        })
                    };
                return {
                    batch: e => {
                        let n;
                        t++;
                        try {
                            n = e()
                        } finally {
                            --t || flush()
                        }
                        return n
                    },
                    batchCalls: e => (...t) => {
                        schedule(() => {
                            e(...t)
                        })
                    },
                    schedule,
                    setNotifyFunction: e => {
                        notifyFn = e
                    },
                    setBatchNotifyFunction: e => {
                        batchNotifyFn = e
                    }
                }
            }()
        },
        7080: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return u
                }
            });
            var i = n(1002),
                s = n(822);
            let o = ["online", "offline"];
            let OnlineManager = class OnlineManager extends i.l {
                constructor() {
                    super(), this.setup = e => {
                        if (!s.sk && window.addEventListener) {
                            let listener = () => e();
                            return o.forEach(e => {
                                window.addEventListener(e, listener, !1)
                            }), () => {
                                o.forEach(e => {
                                    window.removeEventListener(e, listener)
                                })
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.cleanup || this.setEventListener(this.setup)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var e;
                        null == (e = this.cleanup) || e.call(this), this.cleanup = void 0
                    }
                }
                setEventListener(e) {
                    var t;
                    this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e(e => {
                        "boolean" == typeof e ? this.setOnline(e) : this.onOnline()
                    })
                }
                setOnline(e) {
                    let t = this.online !== e;
                    t && (this.online = e, this.onOnline())
                }
                onOnline() {
                    this.listeners.forEach(({
                        listener: e
                    }) => {
                        e()
                    })
                }
                isOnline() {
                    return "boolean" == typeof this.online ? this.online : "undefined" == typeof navigator || void 0 === navigator.onLine || navigator.onLine
                }
            };
            let u = new OnlineManager
        },
        1933: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return QueryObserver
                }
            });
            var i = n(822),
                s = n(8806),
                o = n(3621),
                u = n(1002),
                l = n(2069);
            let QueryObserver = class QueryObserver extends u.l {
                constructor(e, t) {
                    super(), this.client = e, this.options = t, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(t)
                }
                bindMethods() {
                    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
                }
                onSubscribe() {
                    1 === this.listeners.size && (this.currentQuery.addObserver(this), shouldFetchOnMount(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
                }
                onUnsubscribe() {
                    this.hasListeners() || this.destroy()
                }
                shouldFetchOnReconnect() {
                    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnReconnect)
                }
                shouldFetchOnWindowFocus() {
                    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
                }
                destroy() {
                    this.listeners = new Set, this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
                }
                setOptions(e, t) {
                    let n = this.options,
                        s = this.currentQuery;
                    if (this.options = this.client.defaultQueryOptions(e), (0, i.VS)(n, this.options) || this.client.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.currentQuery,
                            observer: this
                        }), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw Error("Expected enabled to be a boolean");
                    this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
                    let o = this.hasListeners();
                    o && shouldFetchOptionally(this.currentQuery, s, this.options, n) && this.executeFetch(), this.updateResult(t), o && (this.currentQuery !== s || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && this.updateStaleTimeout();
                    let u = this.computeRefetchInterval();
                    o && (this.currentQuery !== s || this.options.enabled !== n.enabled || u !== this.currentRefetchInterval) && this.updateRefetchInterval(u)
                }
                getOptimisticResult(e) {
                    let t = this.client.getQueryCache().build(this.client, e),
                        n = this.createResult(t, e);
                    return e.keepPreviousData || (void 0 !== e.placeholderData ? !n.isPlaceholderData : (0, i.VS)(this.getCurrentResult(), n)) || (this.currentResult = n, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), n
                }
                getCurrentResult() {
                    return this.currentResult
                }
                trackResult(e) {
                    let t = {};
                    return Object.keys(e).forEach(n => {
                        Object.defineProperty(t, n, {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (this.trackedProps.add(n), e[n])
                        })
                    }), t
                }
                getCurrentQuery() {
                    return this.currentQuery
                }
                remove() {
                    this.client.getQueryCache().remove(this.currentQuery)
                }
                refetch({
                    refetchPage: e,
                    ...t
                } = {}) {
                    return this.fetch({ ...t,
                        meta: {
                            refetchPage: e
                        }
                    })
                }
                fetchOptimistic(e) {
                    let t = this.client.defaultQueryOptions(e),
                        n = this.client.getQueryCache().build(this.client, t);
                    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, t))
                }
                fetch(e) {
                    var t;
                    return this.executeFetch({ ...e,
                        cancelRefetch: null == (t = e.cancelRefetch) || t
                    }).then(() => (this.updateResult(), this.currentResult))
                }
                executeFetch(e) {
                    this.updateQuery();
                    let t = this.currentQuery.fetch(this.options, e);
                    return null != e && e.throwOnError || (t = t.catch(i.ZT)), t
                }
                updateStaleTimeout() {
                    if (this.clearStaleTimeout(), i.sk || this.currentResult.isStale || !(0, i.PN)(this.options.staleTime)) return;
                    let e = (0, i.Kp)(this.currentResult.dataUpdatedAt, this.options.staleTime);
                    this.staleTimeoutId = setTimeout(() => {
                        this.currentResult.isStale || this.updateResult()
                    }, e + 1)
                }
                computeRefetchInterval() {
                    var e;
                    return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (e = this.options.refetchInterval) && e
                }
                updateRefetchInterval(e) {
                    this.clearRefetchInterval(), this.currentRefetchInterval = e, !i.sk && !1 !== this.options.enabled && (0, i.PN)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(() => {
                        (this.options.refetchIntervalInBackground || o.j.isFocused()) && this.executeFetch()
                    }, this.currentRefetchInterval))
                }
                updateTimers() {
                    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
                }
                clearStaleTimeout() {
                    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
                }
                clearRefetchInterval() {
                    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
                }
                createResult(e, t) {
                    let n;
                    let s = this.currentQuery,
                        o = this.options,
                        u = this.currentResult,
                        c = this.currentResultState,
                        f = this.currentResultOptions,
                        h = e !== s,
                        d = h ? e.state : this.currentQueryInitialState,
                        p = h ? this.currentResult : this.previousQueryResult,
                        {
                            state: y
                        } = e,
                        {
                            dataUpdatedAt: m,
                            error: g,
                            errorUpdatedAt: b,
                            fetchStatus: v,
                            status: _
                        } = y,
                        w = !1,
                        S = !1;
                    if (t._optimisticResults) {
                        let n = this.hasListeners(),
                            i = !n && shouldFetchOnMount(e, t),
                            u = n && shouldFetchOptionally(e, s, t, o);
                        (i || u) && (v = (0, l.Kw)(e.options.networkMode) ? "fetching" : "paused", m || (_ = "loading")), "isRestoring" === t._optimisticResults && (v = "idle")
                    }
                    if (t.keepPreviousData && !y.dataUpdatedAt && null != p && p.isSuccess && "error" !== _) n = p.data, m = p.dataUpdatedAt, _ = p.status, w = !0;
                    else if (t.select && void 0 !== y.data) {
                        if (u && y.data === (null == c ? void 0 : c.data) && t.select === this.selectFn) n = this.selectResult;
                        else try {
                            this.selectFn = t.select, n = t.select(y.data), n = (0, i.oE)(null == u ? void 0 : u.data, n, t), this.selectResult = n, this.selectError = null
                        } catch (e) {
                            this.selectError = e
                        }
                    } else n = y.data;
                    if (void 0 !== t.placeholderData && void 0 === n && "loading" === _) {
                        let e;
                        if (null != u && u.isPlaceholderData && t.placeholderData === (null == f ? void 0 : f.placeholderData)) e = u.data;
                        else if (e = "function" == typeof t.placeholderData ? t.placeholderData() : t.placeholderData, t.select && void 0 !== e) try {
                            e = t.select(e), this.selectError = null
                        } catch (e) {
                            this.selectError = e
                        }
                        void 0 !== e && (_ = "success", n = (0, i.oE)(null == u ? void 0 : u.data, e, t), S = !0)
                    }
                    this.selectError && (g = this.selectError, n = this.selectResult, b = Date.now(), _ = "error");
                    let P = "fetching" === v,
                        O = "loading" === _,
                        C = "error" === _,
                        E = {
                            status: _,
                            fetchStatus: v,
                            isLoading: O,
                            isSuccess: "success" === _,
                            isError: C,
                            isInitialLoading: O && P,
                            data: n,
                            dataUpdatedAt: m,
                            error: g,
                            errorUpdatedAt: b,
                            failureCount: y.fetchFailureCount,
                            failureReason: y.fetchFailureReason,
                            errorUpdateCount: y.errorUpdateCount,
                            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                            isFetchedAfterMount: y.dataUpdateCount > d.dataUpdateCount || y.errorUpdateCount > d.errorUpdateCount,
                            isFetching: P,
                            isRefetching: P && !O,
                            isLoadingError: C && 0 === y.dataUpdatedAt,
                            isPaused: "paused" === v,
                            isPlaceholderData: S,
                            isPreviousData: w,
                            isRefetchError: C && 0 !== y.dataUpdatedAt,
                            isStale: isStale(e, t),
                            refetch: this.refetch,
                            remove: this.remove
                        };
                    return E
                }
                updateResult(e) {
                    let t = this.currentResult,
                        n = this.createResult(this.currentQuery, this.options);
                    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, i.VS)(n, t)) return;
                    this.currentResult = n;
                    let s = {
                        cache: !0
                    };
                    (null == e ? void 0 : e.listeners) !== !1 && (() => {
                        if (!t) return !0;
                        let {
                            notifyOnChangeProps: e
                        } = this.options, n = "function" == typeof e ? e() : e;
                        if ("all" === n || !n && !this.trackedProps.size) return !0;
                        let i = new Set(null != n ? n : this.trackedProps);
                        return this.options.useErrorBoundary && i.add("error"), Object.keys(this.currentResult).some(e => {
                            let n = this.currentResult[e] !== t[e];
                            return n && i.has(e)
                        })
                    })() && (s.listeners = !0), this.notify({ ...s,
                        ...e
                    })
                }
                updateQuery() {
                    let e = this.client.getQueryCache().build(this.client, this.options);
                    if (e === this.currentQuery) return;
                    let t = this.currentQuery;
                    this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == t || t.removeObserver(this), e.addObserver(this))
                }
                onQueryUpdate(e) {
                    let t = {};
                    "success" === e.type ? t.onSuccess = !e.manual : "error" !== e.type || (0, l.DV)(e.error) || (t.onError = !0), this.updateResult(t), this.hasListeners() && this.updateTimers()
                }
                notify(e) {
                    s.V.batch(() => {
                        var t, n, i, s, o, u, l, c;
                        e.onSuccess ? (null == (t = (n = this.options).onSuccess) || t.call(n, this.currentResult.data), null == (i = (s = this.options).onSettled) || i.call(s, this.currentResult.data, null)) : e.onError && (null == (o = (u = this.options).onError) || o.call(u, this.currentResult.error), null == (l = (c = this.options).onSettled) || l.call(c, void 0, this.currentResult.error)), e.listeners && this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(this.currentResult)
                        }), e.cache && this.client.getQueryCache().notify({
                            query: this.currentQuery,
                            type: "observerResultsUpdated"
                        })
                    })
                }
            };

            function shouldFetchOnMount(e, t) {
                return !1 !== t.enabled && !e.state.dataUpdatedAt && !("error" === e.state.status && !1 === t.retryOnMount) || e.state.dataUpdatedAt > 0 && shouldFetchOn(e, t, t.refetchOnMount)
            }

            function shouldFetchOn(e, t, n) {
                if (!1 !== t.enabled) {
                    let i = "function" == typeof n ? n(e) : n;
                    return "always" === i || !1 !== i && isStale(e, t)
                }
                return !1
            }

            function shouldFetchOptionally(e, t, n, i) {
                return !1 !== n.enabled && (e !== t || !1 === i.enabled) && (!n.suspense || "error" !== e.state.status) && isStale(e, n)
            }

            function isStale(e, t) {
                return e.isStaleByTime(t.staleTime)
            }
        },
        4916: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return Removable
                }
            });
            var i = n(822);
            let Removable = class Removable {
                destroy() {
                    this.clearGcTimeout()
                }
                scheduleGc() {
                    this.clearGcTimeout(), (0, i.PN)(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
                        this.optionalRemove()
                    }, this.cacheTime))
                }
                updateCacheTime(e) {
                    this.cacheTime = Math.max(this.cacheTime || 0, null != e ? e : i.sk ? 1 / 0 : 3e5)
                }
                clearGcTimeout() {
                    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
                }
            }
        },
        2069: function(e, t, n) {
            "use strict";
            n.d(t, {
                DV: function() {
                    return isCancelledError
                },
                Kw: function() {
                    return canFetch
                },
                Mz: function() {
                    return createRetryer
                }
            });
            var i = n(3621),
                s = n(7080),
                o = n(822);

            function defaultRetryDelay(e) {
                return Math.min(1e3 * 2 ** e, 3e4)
            }

            function canFetch(e) {
                return (null != e ? e : "online") !== "online" || s.N.isOnline()
            }
            let CancelledError = class CancelledError {
                constructor(e) {
                    this.revert = null == e ? void 0 : e.revert, this.silent = null == e ? void 0 : e.silent
                }
            };

            function isCancelledError(e) {
                return e instanceof CancelledError
            }

            function createRetryer(e) {
                let t, n, u, l = !1,
                    c = 0,
                    f = !1,
                    h = new Promise((e, t) => {
                        n = e, u = t
                    }),
                    shouldPause = () => !i.j.isFocused() || "always" !== e.networkMode && !s.N.isOnline(),
                    resolve = i => {
                        f || (f = !0, null == e.onSuccess || e.onSuccess(i), null == t || t(), n(i))
                    },
                    reject = n => {
                        f || (f = !0, null == e.onError || e.onError(n), null == t || t(), u(n))
                    },
                    pause = () => new Promise(n => {
                        t = e => {
                            let t = f || !shouldPause();
                            return t && n(e), t
                        }, null == e.onPause || e.onPause()
                    }).then(() => {
                        t = void 0, f || null == e.onContinue || e.onContinue()
                    }),
                    run = () => {
                        let t;
                        if (!f) {
                            try {
                                t = e.fn()
                            } catch (e) {
                                t = Promise.reject(e)
                            }
                            Promise.resolve(t).then(resolve).catch(t => {
                                var n, i;
                                if (f) return;
                                let s = null != (n = e.retry) ? n : 3,
                                    u = null != (i = e.retryDelay) ? i : defaultRetryDelay,
                                    h = "function" == typeof u ? u(c, t) : u,
                                    d = !0 === s || "number" == typeof s && c < s || "function" == typeof s && s(c, t);
                                if (l || !d) {
                                    reject(t);
                                    return
                                }
                                c++, null == e.onFail || e.onFail(c, t), (0, o.Gh)(h).then(() => {
                                    if (shouldPause()) return pause()
                                }).then(() => {
                                    l ? reject(t) : run()
                                })
                            })
                        }
                    };
                return canFetch(e.networkMode) ? run() : pause().then(run), {
                    promise: h,
                    cancel: t => {
                        f || (reject(new CancelledError(t)), null == e.abort || e.abort())
                    },
                    continue: () => {
                        let e = null == t ? void 0 : t();
                        return e ? h : Promise.resolve()
                    },
                    cancelRetry: () => {
                        l = !0
                    },
                    continueRetry: () => {
                        l = !1
                    }
                }
            }
        },
        1002: function(e, t, n) {
            "use strict";
            n.d(t, {
                l: function() {
                    return Subscribable
                }
            });
            let Subscribable = class Subscribable {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(e) {
                    let t = {
                        listener: e
                    };
                    return this.listeners.add(t), this.onSubscribe(), () => {
                        this.listeners.delete(t), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
        },
        822: function(e, t, n) {
            "use strict";
            n.d(t, {
                A4: function() {
                    return scheduleMicrotask
                },
                G9: function() {
                    return getAbortController
                },
                Gh: function() {
                    return sleep
                },
                I6: function() {
                    return parseFilterArgs
                },
                Kp: function() {
                    return timeUntilStale
                },
                PN: function() {
                    return isValidTimeout
                },
                Rc: function() {
                    return replaceAt
                },
                Rm: function() {
                    return hashQueryKeyByOptions
                },
                SE: function() {
                    return functionalUpdate
                },
                VS: function() {
                    return shallowEqualObjects
                },
                X7: function() {
                    return matchMutation
                },
                ZT: function() {
                    return noop
                },
                _v: function() {
                    return parseQueryArgs
                },
                _x: function() {
                    return matchQuery
                },
                e5: function() {
                    return difference
                },
                lV: function() {
                    return parseMutationArgs
                },
                oE: function() {
                    return replaceData
                },
                sk: function() {
                    return i
                },
                to: function() {
                    return partialMatchKey
                },
                yF: function() {
                    return hashQueryKey
                }
            });
            let i = "undefined" == typeof window || "Deno" in window;

            function noop() {}

            function functionalUpdate(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function isValidTimeout(e) {
                return "number" == typeof e && e >= 0 && e !== 1 / 0
            }

            function difference(e, t) {
                return e.filter(e => !t.includes(e))
            }

            function replaceAt(e, t, n) {
                let i = e.slice(0);
                return i[t] = n, i
            }

            function timeUntilStale(e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0)
            }

            function parseQueryArgs(e, t, n) {
                return isQueryKey(e) ? "function" == typeof t ? { ...n,
                    queryKey: e,
                    queryFn: t
                } : { ...t,
                    queryKey: e
                } : e
            }

            function parseMutationArgs(e, t, n) {
                return isQueryKey(e) ? "function" == typeof t ? { ...n,
                    mutationKey: e,
                    mutationFn: t
                } : { ...t,
                    mutationKey: e
                } : "function" == typeof e ? { ...t,
                    mutationFn: e
                } : { ...e
                }
            }

            function parseFilterArgs(e, t, n) {
                return isQueryKey(e) ? [{ ...t,
                    queryKey: e
                }, n] : [e || {}, t]
            }

            function matchQuery(e, t) {
                let {
                    type: n = "all",
                    exact: i,
                    fetchStatus: s,
                    predicate: o,
                    queryKey: u,
                    stale: l
                } = e;
                if (isQueryKey(u)) {
                    if (i) {
                        if (t.queryHash !== hashQueryKeyByOptions(u, t.options)) return !1
                    } else {
                        if (!partialDeepEqual(t.queryKey, u)) return !1
                    }
                }
                if ("all" !== n) {
                    let e = t.isActive();
                    if ("active" === n && !e || "inactive" === n && e) return !1
                }
                return ("boolean" != typeof l || t.isStale() === l) && (void 0 === s || s === t.state.fetchStatus) && (!o || !!o(t))
            }

            function matchMutation(e, t) {
                let {
                    exact: n,
                    fetching: i,
                    predicate: s,
                    mutationKey: o
                } = e;
                if (isQueryKey(o)) {
                    if (!t.options.mutationKey) return !1;
                    if (n) {
                        if (hashQueryKey(t.options.mutationKey) !== hashQueryKey(o)) return !1
                    } else {
                        if (!partialDeepEqual(t.options.mutationKey, o)) return !1
                    }
                }
                return ("boolean" != typeof i || "loading" === t.state.status === i) && (!s || !!s(t))
            }

            function hashQueryKeyByOptions(e, t) {
                let n = (null == t ? void 0 : t.queryKeyHashFn) || hashQueryKey;
                return n(e)
            }

            function hashQueryKey(e) {
                return JSON.stringify(e, (e, t) => isPlainObject(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t)
            }

            function partialMatchKey(e, t) {
                return partialDeepEqual(e, t)
            }

            function partialDeepEqual(e, t) {
                return e === t || typeof e == typeof t && !!e && !!t && "object" == typeof e && "object" == typeof t && !Object.keys(t).some(n => !partialDeepEqual(e[n], t[n]))
            }

            function shallowEqualObjects(e, t) {
                if (e && !t || t && !e) return !1;
                for (let n in e)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function isPlainArray(e) {
                return Array.isArray(e) && e.length === Object.keys(e).length
            }

            function isPlainObject(e) {
                if (!hasObjectPrototype(e)) return !1;
                let t = e.constructor;
                if (void 0 === t) return !0;
                let n = t.prototype;
                return !!(hasObjectPrototype(n) && n.hasOwnProperty("isPrototypeOf"))
            }

            function hasObjectPrototype(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function isQueryKey(e) {
                return Array.isArray(e)
            }

            function sleep(e) {
                return new Promise(t => {
                    setTimeout(t, e)
                })
            }

            function scheduleMicrotask(e) {
                sleep(0).then(e)
            }

            function getAbortController() {
                if ("function" == typeof AbortController) return new AbortController
            }

            function replaceData(e, t, n) {
                return null != n.isDataEqual && n.isDataEqual(e, t) ? e : "function" == typeof n.structuralSharing ? n.structuralSharing(e, t) : !1 !== n.structuralSharing ? function replaceEqualDeep(e, t) {
                    if (e === t) return e;
                    let n = isPlainArray(e) && isPlainArray(t);
                    if (n || isPlainObject(e) && isPlainObject(t)) {
                        let i = n ? e.length : Object.keys(e).length,
                            s = n ? t : Object.keys(t),
                            o = s.length,
                            u = n ? [] : {},
                            l = 0;
                        for (let i = 0; i < o; i++) {
                            let o = n ? i : s[i];
                            u[o] = replaceEqualDeep(e[o], t[o]), u[o] === e[o] && l++
                        }
                        return i === o && l === i ? e : u
                    }
                    return t
                }(e, t) : t
            }
        },
        7066: function(e, t, n) {
            "use strict";
            n.d(t, {
                NL: function() {
                    return useQueryClient
                },
                aH: function() {
                    return QueryClientProvider
                }
            });
            var i = n(959);
            let s = i.createContext(void 0),
                o = i.createContext(!1);

            function getQueryClientContext(e, t) {
                return e || (t && "undefined" != typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = s), window.ReactQueryClientContext) : s)
            }
            let useQueryClient = ({
                    context: e
                } = {}) => {
                    let t = i.useContext(getQueryClientContext(e, i.useContext(o)));
                    if (!t) throw Error("No QueryClient set, use QueryClientProvider to set one");
                    return t
                },
                QueryClientProvider = ({
                    client: e,
                    children: t,
                    context: n,
                    contextSharing: s = !1
                }) => {
                    i.useEffect(() => (e.mount(), () => {
                        e.unmount()
                    }), [e]);
                    let u = getQueryClientContext(n, s);
                    return i.createElement(o.Provider, {
                        value: !n && s
                    }, i.createElement(u.Provider, {
                        value: e
                    }, t))
                }
        },
        9108: function(e, t, n) {
            "use strict";
            let i;
            n.d(t, {
                _: function() {
                    return useQueryErrorResetBoundary
                }
            });
            var s = n(959);
            let o = s.createContext((i = !1, {
                    clearReset: () => {
                        i = !1
                    },
                    reset: () => {
                        i = !0
                    },
                    isReset: () => i
                })),
                useQueryErrorResetBoundary = () => s.useContext(o)
        },
        6557: function(e, t, n) {
            "use strict";
            n.d(t, {
                JN: function() {
                    return useClearResetErrorBoundary
                },
                KJ: function() {
                    return getHasError
                },
                pf: function() {
                    return ensurePreventErrorBoundaryRetry
                }
            });
            var i = n(959),
                s = n(9914);
            let ensurePreventErrorBoundaryRetry = (e, t) => {
                    (e.suspense || e.useErrorBoundary) && !t.isReset() && (e.retryOnMount = !1)
                },
                useClearResetErrorBoundary = e => {
                    i.useEffect(() => {
                        e.clearReset()
                    }, [e])
                },
                getHasError = ({
                    result: e,
                    errorResetBoundary: t,
                    useErrorBoundary: n,
                    query: i
                }) => e.isError && !t.isReset() && !e.isFetching && (0, s.L)(n, [e.error, i])
        },
        5426: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return useIsRestoring
                }
            });
            var i = n(959);
            let s = i.createContext(!1),
                useIsRestoring = () => i.useContext(s);
            s.Provider
        },
        7602: function(e, t, n) {
            "use strict";
            n.d(t, {
                Fb: function() {
                    return ensureStaleTime
                },
                SB: function() {
                    return shouldSuspend
                },
                Z$: function() {
                    return willFetch
                },
                j8: function() {
                    return fetchOptimistic
                }
            });
            let ensureStaleTime = e => {
                    e.suspense && "number" != typeof e.staleTime && (e.staleTime = 1e3)
                },
                willFetch = (e, t) => e.isLoading && e.isFetching && !t,
                shouldSuspend = (e, t, n) => (null == e ? void 0 : e.suspense) && willFetch(t, n),
                fetchOptimistic = (e, t, n) => t.fetchOptimistic(e).then(({
                    data: t
                }) => {
                    null == e.onSuccess || e.onSuccess(t), null == e.onSettled || e.onSettled(t, null)
                }).catch(t => {
                    n.clearReset(), null == e.onError || e.onError(t), null == e.onSettled || e.onSettled(void 0, t)
                })
        },
        5228: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return useBaseQuery
                }
            });
            var i = n(959),
                s = n(8806),
                o = n(8292),
                u = n(9108),
                l = n(7066),
                c = n(5426),
                f = n(6557),
                h = n(7602);

            function useBaseQuery(e, t) {
                let n = (0, l.NL)({
                        context: e.context
                    }),
                    d = (0, c.S)(),
                    p = (0, u._)(),
                    y = n.defaultQueryOptions(e);
                y._optimisticResults = d ? "isRestoring" : "optimistic", y.onError && (y.onError = s.V.batchCalls(y.onError)), y.onSuccess && (y.onSuccess = s.V.batchCalls(y.onSuccess)), y.onSettled && (y.onSettled = s.V.batchCalls(y.onSettled)), (0, h.Fb)(y), (0, f.pf)(y, p), (0, f.JN)(p);
                let [m] = i.useState(() => new t(n, y)), g = m.getOptimisticResult(y);
                if ((0, o.$)(i.useCallback(e => {
                        let t = d ? () => void 0 : m.subscribe(s.V.batchCalls(e));
                        return m.updateResult(), t
                    }, [m, d]), () => m.getCurrentResult(), () => m.getCurrentResult()), i.useEffect(() => {
                        m.setOptions(y, {
                            listeners: !1
                        })
                    }, [y, m]), (0, h.SB)(y, g, d)) throw (0, h.j8)(y, m, p);
                if ((0, f.KJ)({
                        result: g,
                        errorResetBoundary: p,
                        useErrorBoundary: y.useErrorBoundary,
                        query: m.getCurrentQuery()
                    })) throw g.error;
                return y.notifyOnChangeProps ? g : m.trackResult(g)
            }
        },
        1985: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return useInfiniteQuery
                }
            });
            var i = n(822),
                s = n(1933),
                o = n(9567);
            let InfiniteQueryObserver = class InfiniteQueryObserver extends s.z {
                constructor(e, t) {
                    super(e, t)
                }
                bindMethods() {
                    super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
                }
                setOptions(e, t) {
                    super.setOptions({ ...e,
                        behavior: (0, o.Gm)()
                    }, t)
                }
                getOptimisticResult(e) {
                    return e.behavior = (0, o.Gm)(), super.getOptimisticResult(e)
                }
                fetchNextPage({
                    pageParam: e,
                    ...t
                } = {}) {
                    return this.fetch({ ...t,
                        meta: {
                            fetchMore: {
                                direction: "forward",
                                pageParam: e
                            }
                        }
                    })
                }
                fetchPreviousPage({
                    pageParam: e,
                    ...t
                } = {}) {
                    return this.fetch({ ...t,
                        meta: {
                            fetchMore: {
                                direction: "backward",
                                pageParam: e
                            }
                        }
                    })
                }
                createResult(e, t) {
                    var n, i, s, u, l, c;
                    let {
                        state: f
                    } = e, h = super.createResult(e, t), {
                        isFetching: d,
                        isRefetching: p
                    } = h, y = d && (null == (n = f.fetchMeta) ? void 0 : null == (i = n.fetchMore) ? void 0 : i.direction) === "forward", m = d && (null == (s = f.fetchMeta) ? void 0 : null == (u = s.fetchMore) ? void 0 : u.direction) === "backward";
                    return { ...h,
                        fetchNextPage: this.fetchNextPage,
                        fetchPreviousPage: this.fetchPreviousPage,
                        hasNextPage: (0, o.Qy)(t, null == (l = f.data) ? void 0 : l.pages),
                        hasPreviousPage: (0, o.ZF)(t, null == (c = f.data) ? void 0 : c.pages),
                        isFetchingNextPage: y,
                        isFetchingPreviousPage: m,
                        isRefetching: p && !y && !m
                    }
                }
            };
            var u = n(5228);

            function useInfiniteQuery(e, t, n) {
                let s = (0, i._v)(e, t, n);
                return (0, u.r)(s, InfiniteQueryObserver)
            }
        },
        4979: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return useMutation
                }
            });
            var i = n(959),
                s = n(822),
                o = n(8276),
                u = n(8806),
                l = n(1002);
            let MutationObserver = class MutationObserver extends l.l {
                constructor(e, t) {
                    super(), this.client = e, this.setOptions(t), this.bindMethods(), this.updateResult()
                }
                bindMethods() {
                    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                }
                setOptions(e) {
                    var t;
                    let n = this.options;
                    this.options = this.client.defaultMutationOptions(e), (0, s.VS)(n, this.options) || this.client.getMutationCache().notify({
                        type: "observerOptionsUpdated",
                        mutation: this.currentMutation,
                        observer: this
                    }), null == (t = this.currentMutation) || t.setOptions(this.options)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var e;
                        null == (e = this.currentMutation) || e.removeObserver(this)
                    }
                }
                onMutationUpdate(e) {
                    this.updateResult();
                    let t = {
                        listeners: !0
                    };
                    "success" === e.type ? t.onSuccess = !0 : "error" === e.type && (t.onError = !0), this.notify(t)
                }
                getCurrentResult() {
                    return this.currentResult
                }
                reset() {
                    this.currentMutation = void 0, this.updateResult(), this.notify({
                        listeners: !0
                    })
                }
                mutate(e, t) {
                    return this.mutateOptions = t, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, { ...this.options,
                        variables: void 0 !== e ? e : this.options.variables
                    }), this.currentMutation.addObserver(this), this.currentMutation.execute()
                }
                updateResult() {
                    let e = this.currentMutation ? this.currentMutation.state : (0, o.R)(),
                        t = { ...e,
                            isLoading: "loading" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        };
                    this.currentResult = t
                }
                notify(e) {
                    u.V.batch(() => {
                        if (this.mutateOptions && this.hasListeners()) {
                            var t, n, i, s, o, u, l, c;
                            e.onSuccess ? (null == (t = (n = this.mutateOptions).onSuccess) || t.call(n, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (i = (s = this.mutateOptions).onSettled) || i.call(s, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context)) : e.onError && (null == (o = (u = this.mutateOptions).onError) || o.call(u, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (l = (c = this.mutateOptions).onSettled) || l.call(c, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context))
                        }
                        e.listeners && this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(this.currentResult)
                        })
                    })
                }
            };
            var c = n(8292),
                f = n(7066),
                h = n(9914);

            function useMutation(e, t, n) {
                let o = (0, s.lV)(e, t, n),
                    l = (0, f.NL)({
                        context: o.context
                    }),
                    [d] = i.useState(() => new MutationObserver(l, o));
                i.useEffect(() => {
                    d.setOptions(o)
                }, [d, o]);
                let p = (0, c.$)(i.useCallback(e => d.subscribe(u.V.batchCalls(e)), [d]), () => d.getCurrentResult(), () => d.getCurrentResult()),
                    y = i.useCallback((e, t) => {
                        d.mutate(e, t).catch(noop)
                    }, [d]);
                if (p.error && (0, h.L)(d.options.useErrorBoundary, [p.error])) throw p.error;
                return { ...p,
                    mutate: y,
                    mutateAsync: p.mutate
                }
            }

            function noop() {}
        },
        8631: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return useQuery
                }
            });
            var i = n(822),
                s = n(1933),
                o = n(5228);

            function useQuery(e, t, n) {
                let u = (0, i._v)(e, t, n);
                return (0, o.r)(u, s.z)
            }
        },
        8292: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return s
                }
            });
            var i = n(4322);
            let s = i.useSyncExternalStore
        },
        9914: function(e, t, n) {
            "use strict";

            function shouldThrowError(e, t) {
                return "function" == typeof e ? e(...t) : !!e
            }
            n.d(t, {
                L: function() {
                    return shouldThrowError
                }
            })
        },
        7457: function(e, t, n) {
            "use strict";
            n.d(t, {
                I0: function() {
                    return g
                },
                v9: function() {
                    return f
                },
                zt: function() {
                    return Provider_default
                }
            });
            var i = n(959),
                s = n(6032),
                o = Symbol.for("react-redux-context"),
                u = "undefined" != typeof globalThis ? globalThis : {},
                l = function() {
                    if (!i.createContext) return {};
                    let e = u[o] ? ? (u[o] = new Map),
                        t = e.get(i.createContext);
                    return t || (t = i.createContext(null), e.set(i.createContext, t)), t
                }();

            function createReduxContextHook(e = l) {
                return function() {
                    let t = i.useContext(e);
                    return t
                }
            }
            var c = createReduxContextHook(),
                useSyncExternalStoreWithSelector = () => {
                    throw Error("uSES not initialized!")
                },
                refEquality = (e, t) => e === t,
                f = function(e = l) {
                    let t = e === l ? c : createReduxContextHook(e),
                        useSelector2 = (e, n = {}) => {
                            let {
                                equalityFn: s = refEquality,
                                devModeChecks: o = {}
                            } = "function" == typeof n ? {
                                equalityFn: n
                            } : n, {
                                store: u,
                                subscription: l,
                                getServerState: c,
                                stabilityCheck: f,
                                identityFunctionCheck: h
                            } = t();
                            i.useRef(!0);
                            let d = i.useCallback({
                                    [e.name](t) {
                                        let n = e(t);
                                        return n
                                    }
                                }[e.name], [e, f, o.stabilityCheck]),
                                p = useSyncExternalStoreWithSelector(l.addNestedSub, u.getState, c || u.getState, d, s);
                            return i.useDebugValue(p), p
                        };
                    return Object.assign(useSelector2, {
                        withTypes: () => useSelector2
                    }), useSelector2
                }();
            Symbol.for("react.element"), Symbol.for("react.portal"), Symbol.for("react.fragment"), Symbol.for("react.strict_mode"), Symbol.for("react.profiler"), Symbol.for("react.provider"), Symbol.for("react.context"), Symbol.for("react.server_context"), Symbol.for("react.forward_ref"), Symbol.for("react.suspense"), Symbol.for("react.suspense_list"), Symbol.for("react.memo"), Symbol.for("react.lazy"), Symbol.for("react.offscreen"), Symbol.for("react.client.reference");
            var h = {
                    notify() {},
                    get: () => []
                },
                d = !!("undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement),
                p = "undefined" != typeof navigator && "ReactNative" === navigator.product,
                y = d || p ? i.useLayoutEffect : i.useEffect,
                Provider_default = function({
                    store: e,
                    context: t,
                    children: n,
                    serverState: s,
                    stabilityCheck: o = "once",
                    identityFunctionCheck: u = "once"
                }) {
                    let c = i.useMemo(() => {
                            let t = function(e, t) {
                                let n;
                                let i = h,
                                    s = 0,
                                    o = !1;

                                function handleChangeWrapper() {
                                    u.onStateChange && u.onStateChange()
                                }

                                function trySubscribe() {
                                    if (s++, !n) {
                                        let s, o;
                                        n = t ? t.addNestedSub(handleChangeWrapper) : e.subscribe(handleChangeWrapper), s = null, o = null, i = {
                                            clear() {
                                                s = null, o = null
                                            },
                                            notify() {
                                                (() => {
                                                    let e = s;
                                                    for (; e;) e.callback(), e = e.next
                                                })()
                                            },
                                            get() {
                                                let e = [],
                                                    t = s;
                                                for (; t;) e.push(t), t = t.next;
                                                return e
                                            },
                                            subscribe(e) {
                                                let t = !0,
                                                    n = o = {
                                                        callback: e,
                                                        next: null,
                                                        prev: o
                                                    };
                                                return n.prev ? n.prev.next = n : s = n,
                                                    function() {
                                                        t && null !== s && (t = !1, n.next ? n.next.prev = n.prev : o = n.prev, n.prev ? n.prev.next = n.next : s = n.next)
                                                    }
                                            }
                                        }
                                    }
                                }

                                function tryUnsubscribe() {
                                    s--, n && 0 === s && (n(), n = void 0, i.clear(), i = h)
                                }
                                let u = {
                                    addNestedSub: function(e) {
                                        trySubscribe();
                                        let t = i.subscribe(e),
                                            n = !1;
                                        return () => {
                                            n || (n = !0, t(), tryUnsubscribe())
                                        }
                                    },
                                    notifyNestedSubs: function() {
                                        i.notify()
                                    },
                                    handleChangeWrapper,
                                    isSubscribed: function() {
                                        return o
                                    },
                                    trySubscribe: function() {
                                        o || (o = !0, trySubscribe())
                                    },
                                    tryUnsubscribe: function() {
                                        o && (o = !1, tryUnsubscribe())
                                    },
                                    getListeners: () => i
                                };
                                return u
                            }(e);
                            return {
                                store: e,
                                subscription: t,
                                getServerState: s ? () => s : void 0,
                                stabilityCheck: o,
                                identityFunctionCheck: u
                            }
                        }, [e, s, o, u]),
                        f = i.useMemo(() => e.getState(), [e]);
                    return y(() => {
                        let {
                            subscription: t
                        } = c;
                        return t.onStateChange = t.notifyNestedSubs, t.trySubscribe(), f !== e.getState() && t.notifyNestedSubs(), () => {
                            t.tryUnsubscribe(), t.onStateChange = void 0
                        }
                    }, [c, f]), i.createElement((t || l).Provider, {
                        value: c
                    }, n)
                };

            function createStoreHook(e = l) {
                let t = e === l ? c : createReduxContextHook(e),
                    useStore2 = () => {
                        let {
                            store: e
                        } = t();
                        return e
                    };
                return Object.assign(useStore2, {
                    withTypes: () => useStore2
                }), useStore2
            }
            var m = createStoreHook(),
                g = function(e = l) {
                    let t = e === l ? m : createStoreHook(e),
                        useDispatch2 = () => {
                            let e = t();
                            return e.dispatch
                        };
                    return Object.assign(useDispatch2, {
                        withTypes: () => useDispatch2
                    }), useDispatch2
                }();
            useSyncExternalStoreWithSelector = s.useSyncExternalStoreWithSelector, i.useSyncExternalStore
        },
        9938: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __addDisposableResource: function() {
                    return __addDisposableResource
                },
                __assign: function() {
                    return __assign
                },
                __asyncDelegator: function() {
                    return __asyncDelegator
                },
                __asyncGenerator: function() {
                    return __asyncGenerator
                },
                __asyncValues: function() {
                    return __asyncValues
                },
                __await: function() {
                    return __await
                },
                __awaiter: function() {
                    return __awaiter
                },
                __classPrivateFieldGet: function() {
                    return __classPrivateFieldGet
                },
                __classPrivateFieldIn: function() {
                    return __classPrivateFieldIn
                },
                __classPrivateFieldSet: function() {
                    return __classPrivateFieldSet
                },
                __createBinding: function() {
                    return i
                },
                __decorate: function() {
                    return __decorate
                },
                __disposeResources: function() {
                    return __disposeResources
                },
                __esDecorate: function() {
                    return __esDecorate
                },
                __exportStar: function() {
                    return __exportStar
                },
                __extends: function() {
                    return __extends
                },
                __generator: function() {
                    return __generator
                },
                __importDefault: function() {
                    return __importDefault
                },
                __importStar: function() {
                    return __importStar
                },
                __makeTemplateObject: function() {
                    return __makeTemplateObject
                },
                __metadata: function() {
                    return __metadata
                },
                __param: function() {
                    return __param
                },
                __propKey: function() {
                    return __propKey
                },
                __read: function() {
                    return __read
                },
                __rest: function() {
                    return __rest
                },
                __runInitializers: function() {
                    return __runInitializers
                },
                __setFunctionName: function() {
                    return __setFunctionName
                },
                __spread: function() {
                    return __spread
                },
                __spreadArray: function() {
                    return __spreadArray
                },
                __spreadArrays: function() {
                    return __spreadArrays
                },
                __values: function() {
                    return __values
                }
            });
            var extendStatics = function(e, t) {
                return (extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(e, t)
            };

            function __extends(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function __() {
                    this.constructor = e
                }
                extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
            }
            var __assign = function() {
                return (__assign = Object.assign || function(e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };

            function __rest(e, t) {
                var n = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++) 0 > t.indexOf(i[s]) && Object.prototype.propertyIsEnumerable.call(e, i[s]) && (n[i[s]] = e[i[s]]);
                return n
            }

            function __decorate(e, t, n, i) {
                var s, o = arguments.length,
                    u = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, t, n, i);
                else
                    for (var l = e.length - 1; l >= 0; l--)(s = e[l]) && (u = (o < 3 ? s(u) : o > 3 ? s(t, n, u) : s(t, n)) || u);
                return o > 3 && u && Object.defineProperty(t, n, u), u
            }

            function __param(e, t) {
                return function(n, i) {
                    t(n, i, e)
                }
            }

            function __esDecorate(e, t, n, i, s, o) {
                function accept(e) {
                    if (void 0 !== e && "function" != typeof e) throw TypeError("Function expected");
                    return e
                }
                for (var u, l = i.kind, c = "getter" === l ? "get" : "setter" === l ? "set" : "value", f = !t && e ? i.static ? e : e.prototype : null, h = t || (f ? Object.getOwnPropertyDescriptor(f, i.name) : {}), d = !1, p = n.length - 1; p >= 0; p--) {
                    var y = {};
                    for (var m in i) y[m] = "access" === m ? {} : i[m];
                    for (var m in i.access) y.access[m] = i.access[m];
                    y.addInitializer = function(e) {
                        if (d) throw TypeError("Cannot add initializers after decoration has completed");
                        o.push(accept(e || null))
                    };
                    var g = (0, n[p])("accessor" === l ? {
                        get: h.get,
                        set: h.set
                    } : h[c], y);
                    if ("accessor" === l) {
                        if (void 0 === g) continue;
                        if (null === g || "object" != typeof g) throw TypeError("Object expected");
                        (u = accept(g.get)) && (h.get = u), (u = accept(g.set)) && (h.set = u), (u = accept(g.init)) && s.unshift(u)
                    } else(u = accept(g)) && ("field" === l ? s.unshift(u) : h[c] = u)
                }
                f && Object.defineProperty(f, i.name, h), d = !0
            }

            function __runInitializers(e, t, n) {
                for (var i = arguments.length > 2, s = 0; s < t.length; s++) n = i ? t[s].call(e, n) : t[s].call(e);
                return i ? n : void 0
            }

            function __propKey(e) {
                return "symbol" == typeof e ? e : "".concat(e)
            }

            function __setFunctionName(e, t, n) {
                return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
                    configurable: !0,
                    value: n ? "".concat(n, " ", t) : t
                })
            }

            function __metadata(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function __awaiter(e, t, n, i) {
                return new(n || (n = Promise))(function(s, o) {
                    function fulfilled(e) {
                        try {
                            step(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function rejected(e) {
                        try {
                            step(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function step(e) {
                        var t;
                        e.done ? s(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(fulfilled, rejected)
                    }
                    step((i = i.apply(e, t || [])).next())
                })
            }

            function __generator(e, t) {
                var n, i, s, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function verb(l) {
                    return function(c) {
                        return function(l) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; o && (o = 0, l[0] && (u = 0)), u;) try {
                                if (n = 1, i && (s = 2 & l[0] ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done) return s;
                                switch (i = 0, s && (l = [2 & l[0], s.value]), l[0]) {
                                    case 0:
                                    case 1:
                                        s = l;
                                        break;
                                    case 4:
                                        return u.label++, {
                                            value: l[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++, i = l[1], l = [0];
                                        continue;
                                    case 7:
                                        l = u.ops.pop(), u.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = (s = u.trys).length > 0 && s[s.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!s || l[1] > s[0] && l[1] < s[3])) {
                                            u.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && u.label < s[1]) {
                                            u.label = s[1], s = l;
                                            break
                                        }
                                        if (s && u.label < s[2]) {
                                            u.label = s[2], u.ops.push(l);
                                            break
                                        }
                                        s[2] && u.ops.pop(), u.trys.pop();
                                        continue
                                }
                                l = t.call(e, u)
                            } catch (e) {
                                l = [6, e], i = 0
                            } finally {
                                n = s = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, c])
                    }
                }
            }
            var i = Object.create ? function(e, t, n, i) {
                void 0 === i && (i = n);
                var s = Object.getOwnPropertyDescriptor(t, n);
                (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) && (s = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, i, s)
            } : function(e, t, n, i) {
                void 0 === i && (i = n), e[i] = t[n]
            };

            function __exportStar(e, t) {
                for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
            }

            function __values(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    i = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function __read(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var i, s, o = n.call(e),
                    u = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = o.next()).done;) u.push(i.value)
                } catch (e) {
                    s = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (n = o.return) && n.call(o)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return u
            }

            function __spread() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
                return e
            }

            function __spreadArrays() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                for (var i = Array(e), s = 0, t = 0; t < n; t++)
                    for (var o = arguments[t], u = 0, l = o.length; u < l; u++, s++) i[s] = o[u];
                return i
            }

            function __spreadArray(e, t, n) {
                if (n || 2 == arguments.length)
                    for (var i, s = 0, o = t.length; s < o; s++) !i && s in t || (i || (i = Array.prototype.slice.call(t, 0, s)), i[s] = t[s]);
                return e.concat(i || Array.prototype.slice.call(t))
            }

            function __await(e) {
                return this instanceof __await ? (this.v = e, this) : new __await(e)
            }

            function __asyncGenerator(e, t, n) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, s = n.apply(e, t || []),
                    o = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function verb(e) {
                    s[e] && (i[e] = function(t) {
                        return new Promise(function(n, i) {
                            o.push([e, t, n, i]) > 1 || resume(e, t)
                        })
                    })
                }

                function resume(e, t) {
                    try {
                        var n;
                        (n = s[e](t)).value instanceof __await ? Promise.resolve(n.value.v).then(fulfill, reject) : settle(o[0][2], n)
                    } catch (e) {
                        settle(o[0][3], e)
                    }
                }

                function fulfill(e) {
                    resume("next", e)
                }

                function reject(e) {
                    resume("throw", e)
                }

                function settle(e, t) {
                    e(t), o.shift(), o.length && resume(o[0][0], o[0][1])
                }
            }

            function __asyncDelegator(e) {
                var t, n;
                return t = {}, verb("next"), verb("throw", function(e) {
                    throw e
                }), verb("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function verb(i, s) {
                    t[i] = e[i] ? function(t) {
                        return (n = !n) ? {
                            value: __await(e[i](t)),
                            done: !1
                        } : s ? s(t) : t
                    } : s
                }
            }

            function __asyncValues(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = __values(e), t = {}, verb("next"), verb("throw"), verb("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function verb(n) {
                    t[n] = e[n] && function(t) {
                        return new Promise(function(i, s) {
                            ! function(e, t, n, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }, t)
                            }(i, s, (t = e[n](t)).done, t.value)
                        })
                    }
                }
            }

            function __makeTemplateObject(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }
            var s = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            };

            function __importStar(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                return s(t, e), t
            }

            function __importDefault(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function __classPrivateFieldGet(e, t, n, i) {
                if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            }

            function __classPrivateFieldSet(e, t, n, i, s) {
                if ("m" === i) throw TypeError("Private method is not writable");
                if ("a" === i && !s) throw TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !s : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? s.call(e, n) : s ? s.value = n : t.set(e, n), n
            }

            function __classPrivateFieldIn(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t)
            }

            function __addDisposableResource(e, t, n) {
                if (null != t) {
                    var i;
                    if ("object" != typeof t && "function" != typeof t) throw TypeError("Object expected.");
                    if (n) {
                        if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
                        i = t[Symbol.asyncDispose]
                    }
                    if (void 0 === i) {
                        if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
                        i = t[Symbol.dispose]
                    }
                    if ("function" != typeof i) throw TypeError("Object not disposable.");
                    e.stack.push({
                        value: t,
                        dispose: i,
                        async: n
                    })
                } else n && e.stack.push({
                    async: !0
                });
                return t
            }
            var o = "function" == typeof SuppressedError ? SuppressedError : function(e, t, n) {
                var i = Error(n);
                return i.name = "SuppressedError", i.error = e, i.suppressed = t, i
            };

            function __disposeResources(e) {
                function fail(t) {
                    e.error = e.hasError ? new o(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
                }
                return function next() {
                    for (; e.stack.length;) {
                        var t = e.stack.pop();
                        try {
                            var n = t.dispose && t.dispose.call(t.value);
                            if (t.async) return Promise.resolve(n).then(next, function(e) {
                                return fail(e), next()
                            })
                        } catch (e) {
                            fail(e)
                        }
                    }
                    if (e.hasError) throw e.error
                }()
            }
            t.default = {
                __extends,
                __assign,
                __rest,
                __decorate,
                __param,
                __metadata,
                __awaiter,
                __generator,
                __createBinding: i,
                __exportStar,
                __values,
                __read,
                __spread,
                __spreadArrays,
                __spreadArray,
                __await,
                __asyncGenerator,
                __asyncDelegator,
                __asyncValues,
                __makeTemplateObject,
                __importStar,
                __importDefault,
                __classPrivateFieldGet,
                __classPrivateFieldSet,
                __classPrivateFieldIn,
                __addDisposableResource,
                __disposeResources
            }
        }
    },
    function(e) {
        var __webpack_exec__ = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function() {
            return __webpack_exec__(6050), __webpack_exec__(7960)
        }), _N_E = e.O()
    }
]);